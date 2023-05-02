import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import validator from 'validator';
import { DOMEN_SITE } from '../../../config/app.config';
import { HOST } from '../../../config/app.config';
  


const RegistrationPage = () => {
    
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })
     
    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
     
     
    const submitChackin = event => {
        event.preventDefault();
        if(!validator.isEmail(register.email)) {
            alert("You did not enter email")
        } else if(register.password !== register.password2) {
            alert("Repeated password incorrectly")
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        } else {
            axios.post(HOST + "/auth/register/", {
                username: register.username,
                email: register.email,
                password: register.password,
            }).then(res => {
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
    }
    return (
        <div>
            
            <h1>RegistrationPage</h1>
            <form onSubmit={submitChackin}>
            <p>Name: <input 
            type="username"
            id="username"
            name="username"
            value={register.username}
            onChange={changeInputRegister}
            /></p>
            <p>Email: <input 
            type="email"
            id="email"
            name="email"
            value={register.email}
            onChange={changeInputRegister}
            formnovalidate
            /></p>
            <p>Password: <input 
            type="password"
            id="password"
            name="password"
            value={register.password}
            onChange={changeInputRegister}
            /></p>
            <p>Repeat password: <input 
            type="password"
            id="password2"
            name="password2"
            value={register.password2}
            onChange={changeInputRegister}
                /></p>
            <input type="submit"/>
        </form>
        </div>
    );
};

export default RegistrationPage;