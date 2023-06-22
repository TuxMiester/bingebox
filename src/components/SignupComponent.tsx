/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/SignupComponent.scss';

/* Component import */

/* Asset imports */

function SignupComponent({
    user,
    editUser,
    signupFunction
}:{
    user:any,
    editUser:any,
    signupFunction:() => void
}){

    const texts = [
        {
            text1:"Lights, Camera,  Signup",
        },
        {
            text1:"Join The Movie Streaming Revolution",
        }
    ]


    let textIndex = 0;
    const[changingText, setChangingText] = useState(texts[0]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(textIndex);
          if(textIndex==0){
            setChangingText(texts[1]);
            textIndex = 1;
          }else{
            setChangingText(texts[0]);
            textIndex = 0;
          }
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <div className='SignupComponent'>
            <div className="leftSignupBox ">
                <img className='bingeBoxImage' src = "./assets/posters/bingeboxlogo.svg"></img> 
                <h2>Sign Up</h2>
                <input className='nameBox'placeholder='Name' value={user.name} onChange={
                    (e)=>{
                        editUser((item:any)=>({...item,name:e.target.value}))
                    }}
                /><br/>
                <input className='signUp_emailBox'placeholder='Email' value={user.email} onChange={
                    (e)=>{
                        editUser((item:any)=>({...item,email:e.target.value}))
                    }}
                /><br/>
                <input className='mobileBox'placeholder='Contact Number' value={user.mobile} onChange={
                    (e)=>{
                        editUser((item:any)=>({...item,mobile:e.target.value}))
                    }}
                /><br/>
                <input className='createPassBox'placeholder='Create Password' value={user.password} onChange={
                    (e)=>{
                        editUser((item:any)=>({...item,password:e.target.value}))
                    }}/><br/>
                <input className='confirmPassBox'placeholder='Confirm Password' value={user.confirmPassword} onChange={
                    (e)=>{
                        editUser((item:any)=>({...item,confirmPassword:e.target.value}))
                    }}/><br/>
                <br/>
                
                <label htmlFor='termsCheckbox'>
                    <input className = "checkBoxSignup" type='checkbox' id="termsCheckbox"/> 
                    Have you read terms and conditions?
                </label>
                <br/>
                <button className='signupButton' id='signupButton' onClick={()=>{
                    signupFunction();
                }}>Sign Up</button>
            </div>
            <div className="rightSignupBox">
                <div className="changingFont">
                    <div className="changingText1">{changingText.text1}</div>
                </div>
            </div>
        </div>
    );
}

export default SignupComponent;