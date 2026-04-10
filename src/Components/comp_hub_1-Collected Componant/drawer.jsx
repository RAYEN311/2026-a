import React, { useState , useContext } from "react"

import Inp_fl from "../comp_hub_0/filter_input";
import Cost_min_max from "../comp_hub_0/indicator";
import MultiRangeSlider from "../comp_hub_0/range_slider";
import Categories from "../comp_hub_0/subcategorie";
import "../comp_hub_0/styles/sudo_button.css"
import "../comp_hub_0/styles/range_style.css"



//
import { def_lang } from "../../views/home";
// 

import lang_map from '../../lang_map.json';
import { getCookie } from "../../cookie";
// 



export default function Drawer() {


    const { dl, setdl } = useContext(def_lang)



    // var min = 50
    // var max = 1150
    var [mins, setmins_price] = useState(0);
    var [maxs, setmaxs_price] = useState(1000);

    var [min, setmin_price] = useState(0);
    var [max, setmax_price] = useState(1000);
    
    const [firstValue, setFirstValue] = useState(120);
    const [secondValue, setSecondValue] = useState(700);
    function handleRanges(value) {
        setFirstValue(value[0]);
        setSecondValue(value[1]);
    }
    var [location, setlocation] = useState('')







    // languge set and handling by drawer

    let lng = ''
    // 

    if (getCookie("lang")) {
        lng = getCookie("lang")
    }
    else {
        lng = 'francais' // default language view home.jsx 
    }
    var [language, setlanguage] = useState(lng)

    if(language == 'francais'){
        document.cookie = "lang= francais; expires=Thu, 01 Jan 2100 00:00:00 UTC; path=/;";
        setdl(0);
    }
    else if(language == 'englais'){
        document.cookie = "lang= englais; expires=Thu, 01 Jan 2100 00:00:00 UTC; path=/;";
        setdl(1);
    }

    // /////////////////////////////////

   let handleminsmaxs = (mins,maxs)=>{
    setmins_price(mins);
    setmaxs_price(maxs);
   }


    return (
        <section className="drawer" id="drawer">
            <div className="settings">
                <span >{lang_map.ph2[dl]}</span>
                <div className="sett_pinner">
                    <select name="lang" id="lang_c" onChange={e => setlanguage(e.target.value)} value={language}>
                        <option value="francais" >{lang_map.lang1[dl]}</option>
                        <option value="englais" >{lang_map.lang2[dl]}</option>
                    </select>
                    <svg className="sett_svg" viewBox="0 0 512 512"><path d="M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z" /></svg>
                </div>
            </div>
            {/* <div className="intro_bellow_sett">{lang_map.ph1[dl]} <a href="">use conditions</a><br />100 % tunisian website <svg xmlns="http://www.w3.org/2000/svg" height="13" viewBox="-60 -40 120 80" width="20" ><g fill="#e70013"><path d="m-60-40h120v80h-120z"></path><circle fill="#fff" r="20"></circle><path d="m600 250a150 150 0 0 0 -150 150 150 150 0 0 0  150 150 150 150 0 0 0  121.02344-61.64844 120 120 0 0 1 -81.02344 31.64844 120 120 0 0 1 -120-120 120 120 0 0 1  120-120 120 120 0 0 1  81.01367 31.67383 150 150 0 0 0 -121.01367-61.67383z" fill="#e70013" stroke-width="10" transform="matrix(.1 0 0 .1 -60 -40)"></path><path d="m0-1 .58779 1.80902-1.53885-1.11804h1.90212l-1.53885 1.11804z" fill="#e70013" transform="matrix(0 -9 9 0 4 0)"></path></g></svg></div> */}
            <div style={{marginTop: '50px'}} className="filter">
                <span>filter</span>
                <svg fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /> </svg>
            </div>
            <div className="filter_elements">
                <Inp_fl
                 mins={0}
                 maxs={1000}
                 onInput={({ mins, maxs }) => {handleminsmaxs(mins,maxs)}}
                />
                <Cost_min_max min={mins} max={maxs} />

                <MultiRangeSlider
                 min={mins}
                 max={maxs}
                 onChange={({ min, max }) => {}}
                />

                <div className="flitring">
                    <div className="wave-group">
                        <input required="" type='search' id='location_input' className="input location_input" onFocus={e => e.target.value = location} onInput={e => setlocation(e.target.value)} onBlur={e => e.target.value = ''} />
                        <span className="bar"></span>
                        <label className="label">
                            <span className="label-char label-char1 ">L</span>
                            <span className="label-char label-char2 ">o</span>
                            <span className="label-char label-char3 ">c</span>
                            <span className="label-char label-char4 ">a</span>
                            <span className="label-char label-char5 ">t</span>
                            <span className="label-char label-char6 ">i</span>
                            <span className="label-char label-char7 ">o</span>
                            <span className="label-char label-char7 ">n</span>
                        </label>
                    </div>
                    <button class="app_filter">{lang_map.ph3[dl]}</button>
                </div>
            </div>
            <div className="categories">
                <span>categories</span>
            </div>
            <Categories />

        </section>
    )
}