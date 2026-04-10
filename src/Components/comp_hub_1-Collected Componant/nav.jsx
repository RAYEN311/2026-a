import React, { useState } from "react";
import useSound from 'use-sound';

import Logo from "../comp_hub_0/logo";
import DropLog from "../comp_hub_0/dropdown_log";

import digi_burger from '../../assets/digi_burger.mp3';
import '../comp_hub_0/styles/dropdown_tag.css'


export default function Nav(porps) {

    function prod_state_I() {
        prod_search_1.style.minHeight = "40px"
        droptag.style.boxShadow = "none"
        main_indic.style.display = 'none';
        main_indic.style.opacity = "0"
        mainindi_state = false;
    }
    function prod_state_II() {
        prod_search_1.style.minHeight = "0"
        prod_search_1.style.height = "0";
        droptag.style.cssText = "0 0 5px 2px var(--box_shadow)"
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

                    </div>
                </div>

                <form className="form_search">
                    <button>
                        <svg width="17" height="16" fill="none" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <input className="input" placeholder="Type your text" required="" type="text" id="search" onFocus={prod_state_I} onBlur={prod_state_II} />
                    <button className="reset" type="reset">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>
                <button className="search_but">
                    search
                </button>
                <div className="product_searched" id="prod_search_1">
                </div>
            </div>
            <DropLog />
        </section>
    )
}