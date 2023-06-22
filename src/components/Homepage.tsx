/* Library import */
import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

/* Dependency import */
import './css/Homepage.scss';

/* Component import */
import Main from './Homepage/Main'

/* Asset imports */


function Homepage(){

    return(
        <div className='Homepage'>
            <Main/>
        </div>
    );
}

export default Homepage;