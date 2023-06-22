import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {ThunkDispatch} from "@reduxjs/toolkit";
import imageShiz from '/home/tpreetsingh/Documents/react-hus-ggn-final-project-tpreetsingh-1687340605072/public/assets/posters/bingeboxlogo.svg'

import './css/Login.scss';

import {login,getUser} from '../Slices/userSlice'; 


function Login(){

    const user = useSelector(getUser);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const[email,setEmail] = useState(""); //testuser@gmail.com
    const[password,setPassword] = useState(""); //hello@123

    useEffect(()=>{
        console.log(user);
    },[user])


    return(
        <div className='Login'>
            <img className='LoginImage' src = "../assets/posters/bg-login.png"></img>
            <div className='LoginInput'>
                <img className='bingeBoxImage' src = "./assets/posters/bingeboxlogo.svg">
                </img>
            </div>
            <input placeholder="testuser@gmail.com" className='emailBox'
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
            /><br/>
            <input placeholder="hello@123" className='passwordBox'
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
            /><br/>
            <button className='text-wrapper'
                onClick={()=>{
                    dispatch(login(
                        {
                            email:email,
                            password:password
                        }
                    ));
                }}
            >Login</button>
            {
                (user)?user.name:""
                
            }
            {/* {user??user.name} */}
        </div>
    );
}

export default Login;