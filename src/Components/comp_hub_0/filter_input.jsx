import React , {useEffect} from 'react';
import  ReactDOM  from 'react-dom';
import "./styles/filter.css"
import PropTypes from "prop-types";
import { SyntheticEvent,useState } from 'react';
export default function Inp_fl({ mins, maxs, onInput }){

  let [min_price,setmin_price] = useState(mins)
  let [max_price,setmax_price] = useState(maxs)
if(min_price > max_price){
  setmax_price(min_price)
}
 useEffect(() => {
  onInput({ mins: min_price, maxs: max_price });
}, [min_price, max_price, onInput]);

  return(
    <div className='fillter_forum'>
    <div className="wave-group">
    <input required="" type="number" id='min_price_input' className="input" onInput={e => setmin_price(parseInt(e.target.value))} onBlur={e => {e.target.value = ''}} />
    <span className="bar"></span>
    <label className="label">
    <span className="label-char label-char1 ">M</span>
    <span className="label-char label-char2 ">i</span>
    <span className="label-char label-char3 ">n</span>
    <span className="label-char label-char4 ">i</span>
    <span className="label-char label-char5 ">m</span>
    <span className="label-char label-char6 ">u</span>
    <span className="label-char label-char7 ">m</span>
    </label>
    </div>
    <div className="wave-group">
    <input required="" type="number" className="input" id='max_price_input' onInput={e => setmax_price(parseInt(e.target.value))} onBlur={e => {e.target.value = ''}}/>
    <span className="bar"></span>
    <label className="label">
    <span className="label-char label-char1 ">M</span>
    <span className="label-char label-char2 ">a</span>
    <span className="label-char label-char3 ">x</span>
    <span className="label-char label-char4 ">i</span>
    <span className="label-char label-char5 ">m</span>
    <span className="label-char label-char6 ">u</span>
    <span className="label-char label-char7 ">m</span>
    </label>
    </div>
    </div>
  );
};


Inp_fl.propTypes = {
  mins: PropTypes.number.isRequired,
  maxs: PropTypes.number.isRequired,
  onInput: PropTypes.func.isRequired
};

