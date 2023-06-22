/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Main.css';

/* Component import */
import Navbar from './Navbar';
import HeroVideo from './HeroVideo';
import Body from './Body';
// import Sidebar from './Sidebar';

/* Asset imports */

function Main(){

    const controlNavbar = () => {
        var currentScrollPos = window.pageYOffset;
        if(currentScrollPos > 0){
			document.getElementById('navbar').classList.add('Navbar-moving');
		}else{
			document.getElementById('navbar').classList.remove('Navbar-moving');
		}
    }

    useEffect(() => {
		window.addEventListener('scroll',controlNavbar)
		return () => {
			window.removeEventListener('scroll',controlNavbar)
		}
		
	},[])

    return(
        <div className='Main'>
            {/* <Sidebar/> */}
            <Navbar/>
            <HeroVideo/>
            <Body/>
        </div>
        
    );
}

export default Main;