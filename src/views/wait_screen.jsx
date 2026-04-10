import React, { useEffect } from 'react';
import { createBrowserHistory } from 'history';
import "../wait.css"
import LogoCopy from "../Components/comp_hub_0/logoCopy";



export default function WaitScreen(){

    return(
        <body className="Wait">
            <LogoCopy Title={"fari"}></LogoCopy>
            <div class="loader_main"></div>
        </body>       
     ) 
}