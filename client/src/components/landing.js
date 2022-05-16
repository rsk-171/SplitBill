import React from 'react';
import '../styles/landing.css'
import  Header  from './Header';
export const Landing = ()=>{
    return (
        <div className = "landing ">
           <Header/>

            
            <main >
                <div className = "landing-heading">

                 
                <h1 className = "landing-header">Split expenses with friends.</h1>
                <p className = "landing-desc"><strong>Share</strong> expenses and bills. <strong>Make sure</strong> everyone gets paid back. Easy to use.</p>
                <img className = "landing-big" src={require('../images/dsiplay.png')} alt=""/>   
                </div>
                
                <div className = "landing-feature">
                 
                <div className = "landing-content">
                <h1  >Splitting expenses has never been easier .</h1> 
                <ul>
                    <li> &nbsp;&nbsp;Share bills and expenses,</li>
                    <li><i class="radio"></i> &nbsp;&nbsp;Make sure everyone gets paid back</li>
                    <li><i class="radio"></i> &nbsp;&nbsp;Totally hastle free</li>
                </ul>

                <a href="http://localhost:3000/signup">   <button className = "landing-button">  Get Started</button></a>

		


                </div>

                </div> 
            </main>
        </div>
    )
}