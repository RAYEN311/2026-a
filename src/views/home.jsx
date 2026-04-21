import React, { useState, useEffect , createContext } from 'react';
import ReactDOM from "react-dom";


import Main from "../Components/comp_hub_1-Collected Componant/main";
import Nav from "../Components/comp_hub_1-Collected Componant/nav";
import Drawer from "../Components/comp_hub_1-Collected Componant/drawer";
import { modesbrcont } from "../Components/comp_hub_1-Collected Componant/main";

import WaitScreen from "./wait_screen";


import { getCookie } from '../cookie';



export let def_lang = createContext({
    dl: 0, setdl: () => {},
    msg_link: '', setmsg_link: () => {},
    itemId: '', setitemId: () => {},
    itemimg: '', setitemimg: () => {},
    itemImages: [], setitemImages: () => {},
    itemdis: '', setitemdis: () => {},
    itemtit: '', setitemtit: () => {},
    itemprice: '', setitemprice: () => {},
    itemrid: '', setitemrid: () => {}
});

export default function Home(){
    
    let [dl,setdl] = useState(0)
    let [msg_link , setmsg_link]  = useState('')
    let [itemId , setitemId]  = useState('')
    let [itemimg , setitemimg] = useState('')
    let [itemImages , setitemImages] = useState([])
    let [itemtit , setitemtit] = useState('')
    let [itemdis , setitemdis] = useState('')
    let [itemprice , setitemprice] = useState('')
    let [itemrid , setitemrid] = useState('')
    let [strs , setstrs] = useState(false)
    let [selectedCategory, setSelectedCategory] = useState(null)
    let [brandSearchResults, setBrandSearchResults] = useState(null)
    let [brandLoading, setBrandLoading] = useState(false)
    //merging the item contexts with


    let dlang = {dl,setdl,msg_link , setmsg_link, itemId , setitemId ,itemimg , setitemimg , itemImages, setitemImages, itemdis , setitemdis ,itemtit , setitemtit ,itemprice , setitemprice ,itemrid , setitemrid }
    const handleBrandSearch = (results) => {
        setBrandLoading(false);
        setBrandSearchResults(results);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    const handleBrandLoading = (state) => {
        setBrandLoading(state);
    };

    const handleSetSelectedCategory = (category) => {
        setBrandSearchResults(null);
        setSelectedCategory(category);
    };
    // default language for app ( view drawer.jsx line 48  path = 'src\Components\comp_hub_1-Collected Componant\drawer.jsx' )




    const [showHome, setShowHome] = useState(false);
    useEffect(() => {
    const delay = 400; 

    const timeoutId = setTimeout(() => {
      setShowHome(true);
    }, delay);
    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the timeout completes
    };
  }, []);

  return (
    <div>
      {showHome ? (
        <div id='Home'>
        <def_lang.Provider value={dlang}>
        <modesbrcont.Provider value={{ selectedCategory, setSelectedCategory: handleSetSelectedCategory }}>
        <body id='main'>
        <Nav onBrandSearch={handleBrandSearch} onBrandLoading={handleBrandLoading} />
        <Drawer></Drawer>
        <Main selectedCategory={selectedCategory} brandSearchResults={brandSearchResults} brandLoading={brandLoading} />
        </body>       
        </modesbrcont.Provider>
        </def_lang.Provider>
        </div>
      ) : (
        <div>
          <WaitScreen></WaitScreen>
        </div>
      )}
    </div>
  )}
