import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import './css/Main.scss';
import Login from './Login'; 
import SignUp from './SignUp'; 
import Homepage from './Homepage'; 
import Subscription from './Subscription';


function Main(){

    return(
        <div className='Main'>
            <Router>
                <Routes>
                    <Route path='/' element = {
                        <>
                            <SignUp/>
                        </>
                    }/>
                     <Route path='/login' element = {
                        <>
                            <Login/>
                        </>
                    }/>
                    <Route path='/homepage' element = {
                        <>
                            <Homepage/>
                        </>
                    }/>
                    <Route path='/Subscription' element = {
                        <>
                            <Subscription/>
                        </>
                    }/>
                </Routes>
            </Router>
        </div>
    );
}

export default Main;