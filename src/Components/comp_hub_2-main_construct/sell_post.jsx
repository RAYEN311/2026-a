import React, { useContext } from "react";

import './main_styles/sell_styles.css'

import { def_lang } from "../../views/home";

export default function Sells_boxe(porps){
        let { dl, setdl, msg_link, setmsg_link, itemId, setitemId, itemimg, setitemimg, itemImages, setitemImages, itemdis, setitemdis, itemtit, setitemtit, itemprice, setitemprice, itemrid, setitemrid } = useContext(def_lang)

        let msglink = "";
        let title = porps.object.product_name;
        let disc = porps.object.product_desc;
        let img_link = porps.object.product_image;
        let price = porps.object.product_price;
        let redirect_link = "" || 'not available';
        let images = Array.isArray(porps.object.images) && porps.object.images.length > 0 ? porps.object.images : [img_link];
    
        function handle_right_slid() {
            setmsg_link(msglink)
            setitemId('')
            setitemimg(img_link)
            setitemImages(images)
            setitemdis(disc)
            setitemtit(title)
            setitemprice(price)
            setitemrid(redirect_link)
            // right_container.style.cssText = 'transform:translate(calc( 0px - var(--right_slid) ))'
            right_container.style.cssText = 'transform:translate(0)'
            right_container.style.boxShadow = ' -3000px 0 10px 3000px rgba(0, 0, 0, 0.3)';
            img_devidor.style.backgroundImage = `url(${img_link})`
        }
        return(
              <div className="sell_box"  onClick={handle_right_slid}>
                  <div className="sell_images">
                      {images.map((src, index) => (
                          <img key={index} src={src} alt={`${title} ${index + 1}`} />
                      ))}
                  </div>
                  <span className="sell_title">{title}</span>
                  <span className="sell_disc">{disc}</span>
                  <span className="sell_price">{price} DT</span>
                  
                  {/* <svg className="comment" fill="gray" width="50" height="50" id="comment"><path className="sc-03" d="M74 43c0 1.1-.9 2-2 2H28c-1.1 0-2-.9-2-2s.9-2 2-2h44c1.1 0 2 .9 2 2zm-14.2 8H28c-1.1 0-2 .9-2 2s.9 2 2 2h31.8c1.1 0 2-.9 2-2s-.9-2-2-2zM72 31H28c-1.1 0-2 .9-2 2s.9 2 2 2h44c1.1 0 2-.9 2-2s-.9-2-2-2zm16-12v48c0 1.1-.9 2-2 2H47L33.4 82.4c-.5.6-3.4 1.4-3.4-1.4V69H14c-1.1 0-2-.9-2-2V19c0-1.1.9-2 2-2h72c1.1 0 2 .9 2 2zm-4 2H16v44h16c1.1 0 2 .9 2 2v9.2l10.8-10.6c.4-.4.9-.6 1.4-.6H84V21z"></path><path fill="#00F" d="M1224-510v1684H-560V-510h1784m8-8H-568v1700h1800V-518z"></path></svg>
                  <svg className="save" fill="gray" width="100" height="100" id="bookmark"><path className="sc-03" d="M69 15H31c-1.1 0-2 .9-2 2v66c0 1.8 2.1 2.7 3.4 1.4L50 66.8l17.6 17.6c1 1 3.4.7 3.4-1.4V17c0-1.1-.9-2-2-2zm-2 63.2L51.4 62.6c-.8-.8-2-.8-2.8 0L33 78.2V19h34v59.2z"></path><path fill="#00F" d="M664-930V754h-1784V-930H664m8-8h-1800V762H672V-938z"></path></svg> */}
              </div>
        )
    }
        
