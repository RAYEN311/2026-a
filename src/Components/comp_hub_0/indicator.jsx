import React from "react"
import './styles/Cost_min_max.css'

export default  function Cost_min_max(porps){
    var min_fil = porps.min; 
    var max_fil = porps.max; 


return(
    <div className="min_max_indicator">
        <h6>min : {min_fil} dt</h6>
        <h6>max : {max_fil} dt</h6>
    </div>
)
}