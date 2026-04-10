import React from "react"
import './Cost_min_max.css'



export default  function Cost_min_max(){
    var min_fil = 0; 
    var max_fil = 10; 

return(
    <div className="min_max_indicator">
        <h6>{min_fil} dt</h6>
        <h6>{max_fil} dt</h6>
    </div>
)
}