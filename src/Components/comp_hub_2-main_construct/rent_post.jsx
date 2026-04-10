import React, { useContext } from "react";
import './main_styles/rent_styles.css'

import { def_lang } from "../../views/home";


export default function Rents_boxe(porps) {

    let { dl, setdl, msg_link, setmsg_link, itemId, setitemId, itemimg, setitemimg, itemdis, setitemdis, itemtit, setitemtit, itemprice, setitemprice, itemrid, setitemrid } = useContext(def_lang)

    let msglink = "";
    let title = "";
    let disc = "";
    let img_link = "";
    let price = "";
    let redirect_link = "" || 'not available';

    function handle_right_slid() {
        setmsg_link(msglink)
        setitemId('')
        setitemimg(img_link)
        setitemdis(disc)
        setitemtit(title)
        setitemprice(price)
        setitemrid(redirect_link)
        // right_container.style.cssText = 'transform:translate(calc( 0px - var(--right_slid) ))'
        right_container.style.cssText = 'transform:translate(0)'
        right_container.style.boxShadow = ' -3000px 0 10px 3000px rgba(0, 0, 0, 0.137)';
        html.style.overflowY = 'hidden'
        img_devidor.style.backgroundImage = `url(${img_link})`
    }


    return (
        <div className="rent_box" onClick={handle_right_slid}>
            <img src={img_link} alt={title} />
            <div className="sides_img">
            <img src={img_link} className="img1" alt={title} />
            <div className="img2">
            <img src={"http://localhost:8000/storage/" + img_link} alt={title} />
            <div id="n_im_2" className="n_im_2"> +4 </div>
            </div>
            </div>
            <span className="rent_title">{title}</span>
            <span className="rent_disc">{disc}</span>
            <span className="rent_price">{price}</span>

        </div>
    )
}
// document.getElementById('').style



