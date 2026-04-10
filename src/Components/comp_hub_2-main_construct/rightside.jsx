import React, { useState, useEffect } from "react";

import "./main_styles/slider_right.css"


export default function Slider_right(porps) {

        let title = porps.title;
        let disc = porps.disc;
        let img_link = porps.img_link;
        let images = Array.isArray(porps.images) && porps.images.length ? porps.images : img_link ? [img_link] : [];
        let price = porps.price;
        let redirect_link = "" || 'not available';

        let [activeIndex, setActiveIndex] = useState(0);

        useEffect(() => {
            setActiveIndex(0);
        }, [images]);

        let currentImage = images[activeIndex] || img_link || "";

        const prevImage = () => {
            if (images.length === 0) return;
            setActiveIndex(prev => (prev - 1 + images.length) % images.length);
        };

        const nextImage = () => {
            if (images.length === 0) return;
            setActiveIndex(prev => (prev + 1) % images.length);
        };
    

    let disable = ()=>{
        right_container.style.cssText = 'transform:translate(var(--right_slid))';
        right_container.style.boxShadow = 'none';
        html.style.overflowY = 'scroll';
    }


    return (
        <div id="right_container" className="right_container">
            <button className="disable" onClick={disable}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </button>
            <div id="img_devidor" className="img_devidor">
                <div></div>
            </div>
            <div className="devidor">
            <div className="circlecontainer">
                <button type="button" className="circle" onClick={prevImage} aria-label="Previous image">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 0-.708 0L4.646 7.646a.5.5 0 0 0 0 .708l6 6a.5.5 0 0 0 .708-.708L5.707 8l5.647-5.646a.5.5 0 0 0 0-.708z"/> </svg>
                </button>
                <button type="button" className="circle" onClick={nextImage} aria-label="Next image">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0L11.354 7.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg>
                </button>
            </div>
            <img src={currentImage} alt={`${title} image ${activeIndex + 1}`} />
            <div className="image_position">{images.length ? `${activeIndex + 1} / ${images.length}` : "No images"}</div>
            </div>
            <div className="to_top">
            <span className="sr_title">{title}</span>
            <br />
            <span className="sr_price">{price} DT</span>
            <br />
            <br />
            <span >Discription</span>
            <br />
            <span className="sr_disc">{disc}</span>
            <br />
            <br />
            <a className="sr_msg" >message</a>
            <br />
            <br />

            </div>
        </div>
    )
}

// document.getElementById('').style.overflowY = ''
