import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

import Main_buttons from "../comp_hub_2-main_construct/buttons_bar";
import Mainshower from "../comp_hub_2-main_construct/mainshower";
import Slider_right from "../comp_hub_2-main_construct/rightside";

import { getCookie } from "../../cookie";
import { def_lang } from "../../views/home";

import lang_map from '../../lang_map.json';

const APP_URL = (import.meta.env.VITE_APP_URL || '').replace(/\/$/, '');

export let modesbrcont = createContext({ selectedCategory: null, setSelectedCategory: () => {} });

export default function Main({ selectedCategory, brandSearchResults, brandLoading }) {

    const {
        dl, setdl,
        msg_link, setmsg_link,
        itemId, setitemId,
        itemimg, setitemimg,
        itemImages, setitemImages,
        itemdis, setitemdis,
        itemtit, setitemtit,
        itemprice, setitemprice,
        itemrid, setitemrid
    } = useContext(def_lang);

    function def_modesbr() {
        return getCookie('modesbr') || 'sell';
    }

    let [modesbr, setmodesbr] = useState(def_modesbr());

    let [obj_sell, setobj_sell] = useState([]);
    let [obj_buy, setobj_buy] = useState([]);
    let [obj_rent, setobj_rent] = useState([]);
    let [loading, setLoading] = useState(false);
    let [pageOffsets, setPageOffsets] = useState({ sell: 1, buy: 1, rent: 1 });
    let [hasMore, setHasMore] = useState({ sell: true, buy: true, rent: true });
    let [mobileQuery, setMobileQuery] = useState('');
    let [mobileLiveResults, setMobileLiveResults] = useState([]);
    let [showMobileSuggestions, setShowMobileSuggestions] = useState(false);
    let [mobileSearchResults, setMobileSearchResults] = useState(null);
    let [mobileSearchLoading, setMobileSearchLoading] = useState(false);

        function asArray(value) {
            return Array.isArray(value) ? value : [];
        }

    function getItemsFromResponse(res) {
            return asArray(res?.data?.data ?? res?.data ?? []);
    }

    function buildUrl(page) {
        const from = (page - 1) * 10 + 1;
        const to = page * 10;

        if (selectedCategory) {
            const categoryParam = selectedCategory.replace(/\s+/g, '_');
            return `${APP_URL}/api/products/${categoryParam}/${from}/${to}`;
        }

        return `${APP_URL}/api/products/${from}/${to}`;
    }

    function loadProducts(mode, page, append = false) {
        setLoading(true);
        const url = buildUrl(page);

        axios.get(url)
            .then(res => {
                const items = getItemsFromResponse(res);

                if (mode === 'sell') {
                    setobj_sell(prev => append ? [...prev, ...items] : items);
                } else if (mode === 'buy') {
                    setobj_buy(prev => append ? [...prev, ...items] : items);
                } else if (mode === 'rent') {
                    setobj_rent(prev => append ? [...prev, ...items] : items);
                }

                setPageOffsets(prev => ({ ...prev, [mode]: page }));
                setHasMore(prev => ({ ...prev, [mode]: items.length === 10 }));
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }

    function handleLoadMore() {
        if (loading || !hasMore[modesbr]) {
            return;
        }

        loadProducts(modesbr, pageOffsets[modesbr] + 1, true);
    }

    useEffect(() => {
        const query = mobileQuery.trim();

        if (!query || !showMobileSuggestions) {
            setMobileLiveResults([]);
            prod_search_2.style.minHeight = "0";
            prod_search_2.style.height = "0";
            return;
        }

        const timeoutId = setTimeout(() => {
            axios.get(`${APP_URL}/api/products/search/${encodeURIComponent(query)}/1/7`)
                .then(res => {
                    const results = res?.data?.data ?? res?.data ?? [];
                    setMobileLiveResults(Array.isArray(results) ? results : []);
                    prod_search_2.style.minHeight = "40px";
                })
                .catch(() => {
                    setMobileLiveResults([]);
                });
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [mobileQuery, showMobileSuggestions]);

    // ✅ FIX: useEffect instead of calling inside render
    useEffect(() => {
        setobj_sell([]);
        setobj_buy([]);
        setobj_rent([]);
        setPageOffsets({ sell: 1, buy: 1, rent: 1 });
        setHasMore({ sell: true, buy: true, rent: true });
        loadProducts(modesbr, 1, false);
    }, [modesbr, selectedCategory]);

    // ✅ Axios versions
    function fetchobj_sell() {
        setLoading(true);
        const categoryParam = selectedCategory ? selectedCategory.replace(/\s+/g, '_') : 'all';
        const url = selectedCategory 
            ? `${APP_URL}/api/products/${categoryParam}/1/4`
            : `${APP_URL}/api/products/1/5`;
        axios.get(url)
            .then(res => {
                setobj_sell(asArray(res?.data?.data));
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }

    function fetchobj_buy() {
        setLoading(true);
        const categoryParam = selectedCategory ? selectedCategory.replace(/\s+/g, '_') : 'all';
        const url = selectedCategory 
            ? `${APP_URL}/api/products/${categoryParam}/1/20`
            : `${APP_URL}/api/products`;
        axios.get(url)
            .then(res => {
                setobj_buy(asArray(res?.data?.data ?? res?.data));
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }

    function fetchobj_rent() {
        setLoading(true);
        const categoryParam = selectedCategory ? selectedCategory.replace(/\s+/g, '_') : 'all';
        const url = selectedCategory 
            ? `${APP_URL}/api/products/${categoryParam}/1/20`
            : `${APP_URL}/api/products`;
        axios.get(url)
            .then(res => {
                setobj_rent(asArray(res?.data?.data ?? res?.data));
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }

    function prod_state_III() {
        if (mobileQuery.trim()) {
            setShowMobileSuggestions(true);
            prod_search_2.style.minHeight = "40px";
        }
    }

    function prod_state_VI() {
        setTimeout(() => {
            setShowMobileSuggestions(false);
            prod_search_2.style.minHeight = "0";
            prod_search_2.style.height = "0";
        }, 120);
    }

    function handleMobileSearch(e) {
        e.preventDefault();
        const query = mobileQuery.trim();
        if (!query) return;

        setShowMobileSuggestions(false);
        setMobileLiveResults([]);
        setMobileSearchLoading(true);
        prod_search_2.style.minHeight = "0";
        prod_search_2.style.height = "0";

        axios.get(`${APP_URL}/api/products/search/${encodeURIComponent(query)}/1/20`)
            .then(res => {
                const results = res?.data?.data ?? res?.data ?? [];
                setMobileSearchResults(Array.isArray(results) ? results : []);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
            .catch(() => {
                setMobileSearchResults([]);
            })
            .finally(() => {
                setMobileSearchLoading(false);
            });
    }

    return (
        <section className="main">
                <div className="subnav">
                    <section>
                        <form className="form_search" onSubmit={handleMobileSearch}>
                            <button type="submit">
                                🔍
                            </button>
                            <input
                                className="input"
                                placeholder="Type your text"
                                required
                                type="text"
                                id="search"
                                value={mobileQuery}
                                onChange={(e) => {
                                    setMobileQuery(e.target.value);
                                    setShowMobileSuggestions(true);
                                }}
                                onFocus={prod_state_III}
                                onBlur={prod_state_VI}
                            />
                            <button
                                className="reset"
                                type="reset"
                                onClick={() => {
                                    setMobileQuery('');
                                    setShowMobileSuggestions(false);
                                    setMobileLiveResults([]);
                                    setMobileSearchResults(null);
                                }}
                            >
                                ❌
                            </button>
                        </form>
                        <button className="search_but" onClick={handleMobileSearch}>
                            search
                        </button>
                    </section>
                    <div className="product_searched" id="prod_search_2" onMouseDown={(e) => e.preventDefault()}>
                        {mobileLiveResults.map((item, index) => {
                            const title = item.title || item.name || item.product_name || item.brand || `Product ${index + 1}`;
                            return (
                                <div
                                    key={item.id || index}
                                    style={{ padding: '10px 12px', borderBottom: '1px solid var(--box_shadow)', cursor: 'pointer' }}
                                    onClick={() => {
                                        setMobileQuery(title);
                                        setShowMobileSuggestions(false);
                                        setMobileLiveResults([]);
                                        setMobileSearchResults([item]);
                                        prod_search_2.style.minHeight = "0";
                                        prod_search_2.style.height = "0";
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                >
                                    {title}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <br />
                <br />

                <Mainshower
                    modesbr={modesbr}
                    obj_rent={obj_rent}
                    obj_buy={obj_buy}
                    obj_sell={obj_sell}
                    searchResults={Array.isArray(mobileSearchResults) ? mobileSearchResults : brandSearchResults}
                    loading={mobileSearchLoading || brandLoading || loading}
                    hasMore={hasMore[modesbr]}
                    onLoadMore={handleLoadMore}
                />

                <Slider_right

                    img_link={itemimg}
                    images={itemImages}
                    title={itemtit}
                    disc={itemdis}
                    price={itemprice}
                    redirect_link={itemrid}
                />
            </section>
    );
}
