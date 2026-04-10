import React from "react" ; 
import './main_styles/wait_post.css'
import './main_styles/buy_styles.css'

export default function Wait_buy(){
    return(
        <div className="buy_box" title="wait..." >
            <img className="imgbuywait gradient-wait"/>
            <div className="flexxi">
            <span className="buy_title buy_titl gradient-wait">title afari buy</span>
            <span className="buy_price buy_pric gradient-wait">price afari</span>
            </div>
            <span className="buy_disc"></span>
            <a className="buy_msg"></a>

        </div>
  )
}