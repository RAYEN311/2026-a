import React, { useState , useContext, useEffect } from "react"
import Sells_boxe from "./sell_post";
import Wait_sell from "./wait_sell";
import Wait_buy from "./wait_buy";
import Wait_rent from "./wait_rent";
import Rents_boxe from "./rent_post";
import Buys_boxe from "./buy_post";
import lang_map from '../../lang_map.json';
import { def_lang } from "../../views/home";

export default function Mainshower(props) {
    const { loading, hasMore, onLoadMore, searchResults } = props;

    useEffect(() => {
        if (!onLoadMore || Array.isArray(searchResults)) {
            return;
        }

        const handleScroll = () => {
            if (loading || !hasMore) {
                return;
            }

            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.documentElement.scrollHeight - 80;

            if (scrollPosition >= threshold) {
                onLoadMore();
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, hasMore, onLoadMore]);
    
    if (Array.isArray(searchResults)) {
        const renderSearchItem = (object, index) => {
            if (props.modesbr === 'buy') return <Buys_boxe key={index} object={object} />;
            if (props.modesbr === 'rent') return <Rents_boxe key={index} object={object} />;
            return <Sells_boxe key={index} object={object} />;
        };

        return (
            <div className={`SBR_boxs${loading ? ' loading' : ''}`}>
                {loading && <div className="loading-overlay"><div className="spinner"></div></div>}
                {searchResults.length > 0 ? (
                    searchResults.map(renderSearchItem)
                ) : (
                    <div className="empty-search">No products found</div>
                )}
            </div>
        );
    }

    if (props.modesbr === 'buy') {
        
        return (
            <div className={`SBR_boxs${loading ? ' loading' : ''}`}>
                {loading && <div className="loading-overlay"><div className="spinner"></div></div>}
                {(Array.isArray(props.obj_buy) ? props.obj_buy : []).map((object, index) => (
                    <Buys_boxe key={index} object={object} />
                ))}

                {Array(10).fill().map((_, i) => <Wait_buy key={i} />)}
            </div>
        );
    }

    if (props.modesbr === 'sell') {
        const { dl, setdl } = useContext(def_lang)
        return (
            <div className={`SBR_boxs${loading ? ' loading' : ''}`}>
                {loading && <div className="loading-overlay"><div className="spinner"></div></div>}
                <div className="intro_bellow_sett">{lang_map.ph1[dl]} <a href="">use conditions</a><br />100 % tunisian website <svg xmlns="http://www.w3.org/2000/svg" height="13" viewBox="-60 -40 120 80" width="20" ><g fill="#e70013"><path d="m-60-40h120v80h-120z"></path><circle fill="#fff" r="20"></circle><path d="m600 250a150 150 0 0 0 -150 150 150 150 0 0 0  150 150 150 150 0 0 0  121.02344-61.64844 120 120 0 0 1 -81.02344 31.64844 120 120 0 0 1 -120-120 120 120 0 0 1  120-120 120 120 0 0 1  81.01367 31.67383 150 150 0 0 0 -121.01367-61.67383z" fill="#e70013" stroke-width="10" transform="matrix(.1 0 0 .1 -60 -40)"></path><path d="m0-1 .58779 1.80902-1.53885-1.11804h1.90212l-1.53885 1.11804z" fill="#e70013" transform="matrix(0 -9 9 0 4 0)"></path></g></svg></div>
                {(Array.isArray(props.obj_sell) ? props.obj_sell : []).map((object, index) => (
                    <Sells_boxe key={index} object={object} />
                ))}

                {Array(1).fill().map((_, i) => <Wait_sell key={i} />)}
            </div>
        );
    }

    if (props.modesbr === 'rent') {
        return (
            <div className={`SBR_boxs${loading ? ' loading' : ''}`}>
                {loading && <div className="loading-overlay"><div className="spinner"></div></div>}
                {(Array.isArray(props.obj_rent) ? props.obj_rent : []).map((object, index) => (
                    <Rents_boxe key={index} object={object} />
                ))}

                {Array(10).fill().map((_, i) => <Wait_rent key={i} />)}
            </div>
        );
    }

    return null;
}
