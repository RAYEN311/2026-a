import React from "react"
import ReactDOM  from "react-dom"

import './dropdown_styles.css'

import ava from "../assets/images/happ.png"



var droping_state = false
// function droping(){
//         console.log('click')
//         if(!droping_state){
//           document.getElementById("drop_main_state").style.opacity = "1";
//           droping_state = true ;
//         }
//         else{
//           document.getElementById("drop_main_state").style.opacity = "0";
//           droping_state = false ; 
//         }
// }
export default function Dropdown(){
return(
        
        <>
             <div className="avater" id="avater">
                <div className="subavatar" id="dropdown" >
                        <svg width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
                <h6>identifier vous</h6>
                <img className="profile_img" src={ava} alt="avatar" />
                </div>
                <div name="drop_log" className="drop_main_state">
                <div name="drop_log" id="drop_main_state">
                        <button>
                                Info
                        </button>
                
                        <button>
                                Login
                        </button>

                        <button className="blue_col upper">
                                Register
                        </button>
             </div>
             </div>
                </div>
        </>
)
}
