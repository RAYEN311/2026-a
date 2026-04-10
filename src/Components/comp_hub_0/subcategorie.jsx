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

export default function Categories(){
    return(
        <section className="subcategories">
          <div className="subcategorie"><div className="mean_container"><img width="25px" height="25px" src={motherboard} alt="motherboard" />&ensp;motherboard</div><svg width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></div>
          <div className="subcategorie"><div className="mean_container"><img width="25px" height="25px" src={screen} alt="screen" />&ensp;original screen</div><svg width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></div>
          <div className="subcategorie"><div className="mean_container"><img width="25px" height="25px" src={battery} alt="battery" />&ensp;original battery</div><svg width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></div>
          <div className="subcategorie"><div className="mean_container"><img width="25px" height="25px" src={camera} alt="camera" />&ensp;original camera</div><svg width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></div>
          <div className="subcategorie"><div className="mean_container"><img width="25px" height="25px" src={sub} alt="sub" />&ensp;original sub</div><svg width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></div>
          <div className="subcategorie"><div className="mean_container"><img width="25px" height="25px" src={housing} alt="housing" />&ensp;original housing</div><svg width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></div>
          <div className="subcategorie"><div className="mean_container"><img width="25px" height="25px" src={speaker} alt="speaker" />&ensp;original speaker</div><svg width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></div>
        </section>
    )
}