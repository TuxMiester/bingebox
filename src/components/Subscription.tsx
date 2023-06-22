/* Library import */
import {useState,useEffect} from 'react';

import './css/Subscription.scss';
import './css/SignUp.scss';




function Subscription(){
    return(
        <div className='Subscription'>
            <div>
                <img className='tiltImage' src = '/assets/posters/tilt-Image.svg'></img>
                <img className='sprayPaintImage' src='/assets/posters/Backgrond_image2.svg'></img>
            </div>
            <div className="unleash-your-movie-wrapper">
                <h3 className="unleash-your-movie">&#34;Unleash Your Movie Magic”</h3>
            </div>
            <div className='bingeLogoSubscription'>

            </div>
            <div className="subscription-plans-wrapper">
                <h4 className="subscription-plans">Subscription Plans for Endless Streaming Delight!&#34;</h4>
            </div>
        </div>
    );
}

export default Subscription;