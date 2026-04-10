import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import './index.css'
import Home from './views/home';
import Register from './views/register';
import Login from './views/login';

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
);
