import React from "react";
import ReactDOM from "react-dom";
import motherboard from "../../assets/svg/motherboard.svg";
import screen from "../../assets/svg/screen.svg";
import battery from "../../assets/svg/battery.svg";
import camera from "../../assets/svg/camera.svg";
import sub from "../../assets/svg/sub.svg";
import housing from "../../assets/svg/housing.svg";
import speaker from "../../assets/svg/speaker.svg";
import "./styles/subcategorie.css";

export default function Categories({ onCategoryClick }){
    const categories = [
        { name: 'motherboard', link: 'motherboard', icon: motherboard },
        { name: 'original screen', link: 'screen', icon: screen },
        { name: 'original battery', link: 'battery', icon: battery },
        { name: 'original camera', link: 'camera', icon: camera },
        { name: 'original sub', link: 'sub', icon: sub },
        { name: 'original housing', link: 'housing', icon: housing },
        { name: 'original speaker', link: 'speaker', icon: speaker }
    ];

    const handleCategoryClick = (categoryName) => {
        if (onCategoryClick) {
            onCategoryClick(categoryName);
        }
    };

    return(
        <section className="subcategories">
        
          {categories.map((category, index) => (
            <div key={index} className="subcategorie" onClick={() => handleCategoryClick(category.link)}>
                <div className="mean_container">
                    <img width="25px" height="25px" src={category.icon} alt={category.name} />&ensp;{category.name}
                </div>
                <svg width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
          ))}
        </section>
    )
}
