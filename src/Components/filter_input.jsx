import React from 'react';
import  ReactDOM  from 'react-dom';
import "./filter.css"
export default function Inp_fl(){
  return(
    <div className='fillter_forum'>
    <div className="wave-group">
    <input required="" type="number" className="input" />
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
    <input required="" type="text" className="input" />
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

