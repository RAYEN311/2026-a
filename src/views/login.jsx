import React, { useState } from 'react';
import axios from 'axios';
import "../login.css" ;
import "../Components/comp_hub_0/styles/sudo_button.css"
import { Link } from 'react-router-dom';
import LogoCopy from "../Components/comp_hub_0/logoCopy";


export default function Login(){
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
        const [loginUrl,setloginurl] = useState('http://localhost:8000/api/login')


       let good_con = () =>{
              connection_ok.style.cssText = "transform:translate(-10%)"
              setTimeout(()=>{
                connection_ok.style.cssText = "transform:translate(100%)"
              },3000)
       }



        const handleLogin = () => {


          if(email - 1 && email && password ){
            console.log(typeof(email))
            // Send login credentials to using phone and password
            axios.post( loginUrl , {
              phone: email,
              password: password
            })
            .then(response => {
              // Handle successful login
              console.log('Logged in:', response.data);
              good_con();
            })
            .catch(error => {
              // Handle login error 
              console.error('Login error:', error);
            });
          }




          else if(!(email - 1)  && email && password ){
            // Send login credentials to using email and password
            axios.post(loginUrl, {
              email: email,
              password: password
            })
            .then(response => {
              // Handle successful login
              console.log('Logged in:', response.data);
              good_con();

            })
            .catch(error => {
              // Handle login error 
              console.error('Login error:', error);
            });}




          }
         return(



        <body className="for_login_forum"> 

        


        <Link to='/'><LogoCopy className="title-log" Title={"fari"}></LogoCopy></Link>
        <div class="login-forum">
        <div className='form log_form'>
            <h2> 
             identifcation</h2>
            <label htmlFor="text" >Phone Number / Email Adress</label>
            {/* <input type="text" required placeholder="Exp: 35153185"/> */}
            <input className='log_inp' type="text" id='email' required onInput={e => setEmail(e.target.value)}/>
            <label htmlFor="password" >password</label>
            <input className='log_inp' type="password" id='password' required onInput={e => setPassword(e.target.value)}/>
            <button onClick={handleLogin} className="sudo_button log_butt upper_spacing">Login</button>
            <span className='span_log'>en passant vote demand et command sur afari vous accepter <a href="">les conditions generals</a> de afari consulter notre <a href=""> notice de protection </a> de vos inforamtion personelle , notre <a href="">notice cookies </a>et notre <a href="">notice annance </a>pub basser sur vos center d intert <br /><br /><li><a href="">need a help?</a></li></span>
        </div>
        <hr className="seprate_horizontal"/>
        <div className="vertical-spacing">
        {/* <a href="">Home </a> */}
        <Link to='/register'>register</Link>
        </div>
        <div className="empty_sp_v"></div>
    </div>


      <div id="connection_ok" className='connection-ok'>
        connection reussie 
      </div>
      <div className='connection-reject'>
        echec de connection 
      </div>



        
        </body>
    )
}