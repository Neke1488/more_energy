import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { DOMEN_SITE } from '../../../config/app.config';
import { HOST } from '../../../config/app.config';


  
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);
    const [emailError, setEmailError] = useState('Not empty!');
    const [passwordError, setPasswordError] = useState('Not empty!');
    const [formValid, setFormValid] = useState(false);
    
    useEffect(()=>{
      if(emailError || passwordError){
        setFormValid(false)
      }else{
        setFormValid(true)
      }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
      setEmail(e.target.value);
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(String(e.target.value).toLowerCase())){
          setEmailError('Uncorrect');
      }else{
        setEmailError('');
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(DOMEN_SITE, { email, password })
          .then(res => {
            console.log(res);
            if (res.data === true) {
                window.location.href = DOMEN_SITE + "/auth"
            } else {
                alert("There is already a user with this email")
            }
        }).catch(() => {
            alert("An error occurred on the server")
        })
      }



    const passwordHandler = (e) => {
      setPassword(e.target.value)
      if (e.target.value.length < 3 || e.target.value.length > 15){
        setPasswordError('Uncorrect');
        if(!e.target.value){
          setPasswordError('Not Empty');
        }
      }else{
        setPasswordError('');
      }
    }


    const blurHandler = (e) => {
      switch (e.target.name) {
        case 'email':
          setEmptyEmail(true)
          break;
        case 'password':
          setEmptyPassword(true)
          break;
      }
    }


    return (
        <div className="loginForm">
            <div className="wrapper">
                <form onSubmit={e => handleSubmit(e)}>
                    <h1>Login Page</h1>
                    {(emptyEmail && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Your email" />
                    {(emptyPassword && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Your password" />
                    <button disabled={!formValid} type="button">Log in</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;