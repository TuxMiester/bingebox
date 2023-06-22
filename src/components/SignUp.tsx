import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {ThunkDispatch} from "@reduxjs/toolkit";

import './css/SignUp.scss';
import SignupComponent from './SignupComponent';
import { signup } from '../Slices/userSlice';



function SignUp(){

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const [user,editUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""
    })

    const signupFunction = () => {
        dispatch(signup(user))
    }

    return(
        <div className='SignUp'>
            <img className='tiltImage' src='./assets/posters/tilt-Image.svg'/>
            <SignupComponent
                user={user}
                editUser={editUser}
                signupFunction={signupFunction}
            />
           
        </div>
    );
}

export default SignUp;

