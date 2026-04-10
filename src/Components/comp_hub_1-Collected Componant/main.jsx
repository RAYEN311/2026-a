import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

import Main_buttons from "../comp_hub_2-main_construct/buttons_bar";
import Mainshower from "../comp_hub_2-main_construct/mainshower";
import Slider_right from "../comp_hub_2-main_construct/rightside";

import { getCookie } from "../../cookie";
import { def_lang } from "../../views/home";

import lang_map from '../../lang_map.json';

export let modesbrcont = createContext(null);

export default function Main() {

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
    let mdsbr = { setmodesbr };

    let [obj_sell, setobj_sell] = useState([]);
    let [obj_buy, setobj_buy] = useState([]);
    let [obj_rent, setobj_rent] = useState([]);

    // ✅ FIX: useEffect instead of calling inside render
    useEffect(() => {
        if (modesbr === 'buy') {
            fetchobj_buy();
        } else if (modesbr === 'sell') {
            fetchobj_sell();
        } else if (modesbr === 'rent') {
            fetchobj_rent();
        }
    }, [modesbr]);

    // ✅ Axios versions
    function fetchobj_sell() {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setobj_sell(res.data.data);
            })
            .catch(err => console.error(err));
    }

    function fetchobj_buy() {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setobj_buy(res.data);
            })
            .catch(err => console.error(err));
    }

    function fetchobj_rent() {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setobj_rent(res.data);
            })
            .catch(err => console.error(err));
    }

    function prod_state_III() {
        prod_search_2.style.minHeight = "40px";
    }

    function prod_state_VI() {
        prod_search_2.style.minHeight = "0";
        prod_search_2.style.height = "0";
    }

    return (
        <modesbrcont.Provider value={mdsbr}>
            <section className="main">
                <div className="subnav">
                    <section>
                        <form className="form_search">
                            <button>
                                🔍
                            </button>
                            <input
                                className="input"
                                placeholder="Type your text"
                                required
                                type="text"
                                id="search"
                                onFocus={prod_state_III}
                                onBlur={prod_state_VI}
                            />
                            <button className="reset" type="reset">
                                ❌
                            </button>
                        </form>
                        <button className="search_but">
                            search
                        </button>
                    </section>
                    <div className="product_searched" id="prod_search_2"></div>
                </div>

                <br />
                <br />

                <Mainshower
                    modesbr={modesbr}
                    obj_rent={obj_rent}
                    obj_buy={obj_buy}
                    obj_sell={obj_sell}
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
        </modesbrcont.Provider>
    );
}