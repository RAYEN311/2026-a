import React, { useState, useEffect } from "react";
import useSound from 'use-sound';
import axios from 'axios';

import Logo from "../comp_hub_0/logo";
import DropLog from "../comp_hub_0/dropdown_log";

import digi_burger from '../../assets/digi_burger.mp3';
import '../comp_hub_0/styles/dropdown_tag.css'
import apple from "../../assets/svg/apple.svg";
import samsung from "../../assets/svg/samsung.svg";
import oppo from "../../assets/svg/oppo.svg";
import vivo from "../../assets/svg/vivo.svg";
import huawei from "../../assets/svg/huawei.svg";
import infinix from "../../assets/svg/infinix.svg";
import honor from "../../assets/svg/honor.svg";

const APP_URL = (import.meta.env.VITE_APP_URL || '').replace(/\/$/, '');

export default function Nav(porps) {
    const { onBrandSearch, onBrandLoading } = porps;

    const [searchQuery, setSearchQuery] = useState('');
    const [liveResults, setLiveResults] = useState([]);
    const [liveLoading, setLiveLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);

    function prod_state_I() {
        if (searchQuery.trim()) {
            setShowSuggestions(true);
            prod_search_1.style.minHeight = "40px";
        }
        droptag.style.boxShadow = "none"
        main_indic.style.display = 'none';
        main_indic.style.opacity = "0"
        mainindi_state = false;
    }
    function prod_state_II() {
        setTimeout(() => {
            setShowSuggestions(false);
            prod_search_1.style.minHeight = "0";
            prod_search_1.style.height = "0";
            droptag.style.cssText = "0 0 5px 2px var(--box_shadow)";
        }, 120);
    }

    let [drawer_state , setdrawer_state] = useState(false);

    function drw_cn_bur() {
        if (!drawer_state) {
            drawer.style.left = "0";
            setdrawer_state(true) ;
        } else {
            drawer.style.left = "-100%"
            setdrawer_state(false) ;
        }
    }
    let [mainindi_state , setmainindi_state]  = useState(false);
    function m_i_s_c() {
        if (!mainindi_state) {
            main_indic.style.display = 'block';
            main_indic.style.opacity = "1"
            prod_search_1.style.minHeight = "0"
            prod_search_1.style.height = "0";
            droptag.style.cssText = "0 0 5px 2px var(--box_shadow)"
            setmainindi_state(true);
        } else {
            main_indic.style.display = 'none';
            main_indic.style.opacity = "0"
            setmainindi_state(false);
        }
    }
    
    var title = 'fari'
    const [play] = useSound(digi_burger);
    

    function burger_cl(){
        drw_cn_bur();
        play();
    }

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const query = searchQuery.trim();

        if (!query || !showSuggestions) {
            setLiveResults([]);
            setLiveLoading(false);
            prod_search_1.style.minHeight = "0";
            prod_search_1.style.height = "0";
            return;
        }

        const timeoutId = setTimeout(() => {
            setLiveLoading(true);
            axios.get(`${APP_URL}/api/products/search/${encodeURIComponent(query)}/1/7`)
                .then(res => {
                    const results = res?.data?.data ?? res?.data ?? [];
                    setLiveResults(Array.isArray(results) ? results : []);
                    prod_search_1.style.minHeight = "40px";
                })
                .catch(() => {
                    setLiveResults([]);
                })
                .finally(() => {
                    setLiveLoading(false);
                });
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchQuery, showSuggestions]);

    function toggleTheme() {
        setDarkMode(!darkMode);
    }

    function handleTextSearch(e) {
        e.preventDefault();
        const query = searchQuery.trim();
        if (!query) return;

        const from = 1;
        const to = 20;

        setShowSuggestions(false);
        setLiveResults([]);
        if (typeof onBrandLoading === 'function') onBrandLoading(true);
        prod_search_1.style.minHeight = "0";
        prod_search_1.style.height = "0";

        axios.get(`${APP_URL}/api/products/search/${encodeURIComponent(query)}/${from}/${to}`)
            .then(res => {
                const results = res?.data?.data ?? res?.data ?? [];
                if (typeof onBrandSearch === 'function') {
                    onBrandSearch(Array.isArray(results) ? results : []);
                }
            })
            .catch(err => {
                console.error(err);
                if (typeof onBrandSearch === 'function') onBrandSearch([]);
                if (typeof onBrandLoading === 'function') onBrandLoading(false);
            });
    }

    function handleBrandClick(link) {
        const query = encodeURIComponent(link);
        const from = 1;
        const to = 20;

        if (typeof onBrandLoading === 'function') onBrandLoading(true);
        prod_search_1.style.minHeight = "0";
        prod_search_1.style.height = "0";
        main_indic.style.display = 'none';
        main_indic.style.opacity = "0";
        setmainindi_state(false);

        axios.get(`${APP_URL}/api/products/search/${query}/${from}/${to}`)
            .then(res => {
                const results = res?.data?.data ?? res?.data ?? [];
                if (typeof onBrandSearch === 'function') {
                    onBrandSearch(Array.isArray(results) ? results : []);
                }
            })
            .catch(err => {
                console.error(err);
                if (typeof onBrandSearch === 'function') {
                    onBrandSearch([]);
                }
                if (typeof onBrandLoading === 'function') onBrandLoading(false);
            });
    }

    const brand = [
        { name: 'apple', link: 'iphone', icon: apple },
        { name: 'samsung', link: 'samsung', icon: samsung },
        { name: 'oppo', link: 'oppo', icon: oppo },
        { name: 'vivo', link: 'vivo', icon: vivo },
        { name: 'huawei', link: 'huawei', icon: huawei },
        { name: 'infinix', link: 'infinix', icon: infinix },
        { name: 'honor', link: 'honor', icon: honor }
    ];



    return (
        <section className="nav">
            <label className="burger" for="burger">
                <input type="checkbox" id="burger" onClick={burger_cl} />
                <span></span>
                <span></span>
                <span></span>
            </label>
            {/* <DropTag></DropTag> */}
            <Logo Title={title}></Logo>
            <div className="subnav">
                <div>
                    <button onClick={m_i_s_c} class="menu__icon" id="droptag">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="undermainindi" id="main_indic">
                    <div className="undermainindi_container">
                    {brand.map((brand, index) => (
                        <div className="brand" key={index} onClick={() => handleBrandClick(brand.link)} style={{ cursor: 'pointer' }}>
                            <div>
                                <img width="100px" src={brand.icon} alt={brand.name} />
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                </div>

                <form className="form_search" onSubmit={handleTextSearch}>
                    <button type="submit">
                        <svg width="17" height="16" fill="none" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <input
                        className="input"
                        placeholder="Type your text"
                        required=""
                        type="text"
                        id="search"
                        value={searchQuery}
                        onChange={e => {
                            setSearchQuery(e.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={prod_state_I}
                        onBlur={prod_state_II}
                    />
                    <button className="reset" type="reset" onClick={() => {
                        setSearchQuery('');
                        setShowSuggestions(false);
                        setLiveResults([]);
                    }}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>
                <button className="search_but" onClick={handleTextSearch}>
                    search
                </button>
                <div className="product_searched" id="prod_search_1" onMouseDown={e => e.preventDefault()}>
                    {liveLoading && <div style={{ padding: '10px 12px' }}>Loading...</div>}
                    {!liveLoading && liveResults.map((item, index) => {
                        const title = item.title || item.name || item.product_name || item.brand || `Product ${index + 1}`;
                        return (
                            <div
                                key={item.id || index}
                                style={{ padding: '10px 12px', borderBottom: '1px solid var(--box_shadow)', cursor: 'pointer' }}
                                onClick={() => {
                                    setSearchQuery(title);
                                    setShowSuggestions(false);
                                    setLiveResults([]);
                                    if (typeof onBrandSearch === 'function') {
                                        onBrandSearch([item]);
                                    }
                                    prod_search_1.style.minHeight = "0";
                                    prod_search_1.style.height = "0";
                                }}
                            >
                                {title}
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? '☀️' : '🌙'}
            </button>
            <DropLog />
        </section>
    )
}
