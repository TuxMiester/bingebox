import {useState,useEffect} from 'react';

import './css/SignUp.scss';



function SignUp(){

    return(
        <div className='SignUp'>
            <img className='tiltImage' src = "./assets/posters/tilt_image.png"></img>
            <img className='sprayPaintImage' src = "./assets/posters/Backgrond_image2.svg"></img>
            <img className='bingeBoxImage' src = "./assets/posters/bingeboxlogo.svg"></img> 
            <h2>SignUp</h2>
            <input className='nameBox'
            /><br/>
            <input className='signUp_emailBox'
            /><br/>
            <input className='mobileBox'
            /><br/>
            <input className='createPassBox'
            /><br/>
            <input className='confirmPassBox'
            /><br/>
            <br/>
            <button>Sign Up</button>
        </div>
    );
}

export default SignUp;

