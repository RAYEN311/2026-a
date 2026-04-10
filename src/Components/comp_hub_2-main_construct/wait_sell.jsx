import React from "react" ; 
import './main_styles/wait_post.css'

export default function Wait_sell(){
    return(
    <div className="sell_box" title="wait...">
        <div className="wait_img gradient-wait" ></div>
        <span className="sell_title gradient-wait">title for afari</span>
        <span className="sell_price gradient-wait">3000 bill dt</span>
        <span className="sell_disc gradient-wait mnr">disc for afari disc for afari</span>
        <br />
        <span className="sell_disc gradient-wait mnr">disc for afari afari disc disc  for afari</span>
        <br />
        <span className="sell_disc gradient-wait mnr">disc for afari afari disc for afari</span>
    </div>
    )
}