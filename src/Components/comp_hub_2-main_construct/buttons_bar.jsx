import React, { useRef , useContext, useState, useEffect } from "react";
import "./main_styles/buttons_bar.css"
import { getCookie } from "../../cookie";
import useSound from 'use-sound';
import box from '../../assets/box.mp3';
import ping from '../../assets/ping.mp3';


import { modesbrcont } from "../comp_hub_1-Collected Componant/main";




export default function Main_buttons(porps) {

    const {setmodesbr} = useContext(modesbrcont)

    // const refsbr = useRef(null)
    
    // function useisvisible(ref){
    //     const [isinster ,setinster] = useState(false)
    //     useEffect(()=>{
    //         const observer = new IntersectionObserver(([entry]) => setinster(entry.isIntersecting))
    //         observer.observe(ref.current);
    //         return ()=>{
    //             observer.disconnect();
    //         };
    //     },[ref]);
    //     return isinster;
    // }

    // if(useisvisible(refsbr)){
    //     chnattcol
    // }

    setTimeout(()=>{
            if(getCookie('modesbr')){
                if(getCookie('modesbr') == 'buy'){
                    butt_buy_modif()
                }
                else if(getCookie('modesbr') == 'sell'){
                    butt_sell_modif()
                }
                else if(getCookie('modesbr') == 'rent'){
                    butt_rent_modif()
                }
            }
            else{
                butt_buy_modif()
            }
    
    },1)
    
    const [play] = useSound(box);
    const [play1] = useSound(ping);


    function hand_sell() {
        setmodesbr('sell')
        play()
        butt_sell_modif()
        document.cookie = "modesbr= sell; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;";
    }
    function hand_buy() {
        setmodesbr('buy')
        play()
        butt_buy_modif()
        document.cookie = "modesbr= buy; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;";
        
    }
    function hand_rent() {
        setmodesbr('rent')
        play()
        butt_rent_modif()
        document.cookie = "modesbr= rent; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;";
    }

  function butt_sell_modif(){
        sellb.style.borderBottom = '3px solid var(--second)'   
        rentb.style.borderBottom = 'none'
        buyb.style.borderBottom = 'none'
        sellb.style.scale = '1.05'   
        buyb.style.scale = '1'   
        rentb.style.scale = '1'   
        
    }
    function butt_buy_modif(){
        buyb.style.borderBottom = '3px solid var(--second)'
        rentb.style.borderBottom = 'none'
        sellb.style.borderBottom = 'none'
        buyb.style.scale = '1.05'   
        sellb.style.scale = '1'   
        rentb.style.scale = '1'   
    }
    
    function butt_rent_modif(){
        rentb.style.borderBottom = '3px solid var(--second)'
        buyb.style.borderBottom = 'none'
        sellb.style.borderBottom = 'none'
        rentb.style.scale = '1.05'   
        sellb.style.scale = '1'   
        buyb.style.scale = '1'   
    }


    return (
        // ref={refsbr}
        <div className="main_buttons_bar" id="affari_sbr" >
            <div className="sec_sub_main_butt_bar_i" >
                <button id="sellb" className="button_bar" onClick={hand_sell}>{porps.sell}</button>
                <button id="buyb"  className="button_bar" onClick={hand_buy}>{porps.buy}</button>
                <button id="rentb" className="button_bar" onClick={hand_rent}>{porps.rent}</button>
            </div>
            
            <div className="sec_sub_main_butt_bar_ii" >
                <button className="button_bar gold">{porps.pp}</button>
                <button className="button_bar green">{porps.pa}</button>
            </div>

        </div>
    )
}
