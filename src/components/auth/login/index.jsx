import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { DOMEN_SITE } from '../../../config/app.config';


  
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post('/auth/login', { username, password });
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      setIsLoading(false);
      setError('');
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message || 'Something went wrong.');
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('/auth/logout', { refreshToken });
      setAccessToken('');
      setRefreshToken('');
    } catch (error) {
      setError(error.response.data.message || 'Something went wrong.');
    }
  };

  const handleRefreshToken = async () => {
    try {
      const response = await axios.post('/auth/token', { refreshToken });
      setAccessToken(response.data.accessToken);
    } catch (error) {
      setError(error.response.data.message || 'Something went wrong.');
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (accessToken) {
    return (
      <>
        <p>You are logged in with access token: {accessToken}</p>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleRefreshToken}>Refresh Access Token</button>
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        {error && <p>{error}</p>}
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emptyEmail, setEmptyEmail] = useState(false);
//     const [emptyPassword, setEmptyPassword] = useState(false);
//     const [emailError, setEmailError] = useState('Not empty!');
//     const [passwordError, setPasswordError] = useState('Not empty!');
//     const [formValid, setFormValid] = useState(false);
    
//     useEffect(()=>{
//       if(emailError || passwordError){
//         setFormValid(false)
//       }else{
//         setFormValid(true)
//       }
//     }, [emailError, passwordError])

//     const emailHandler = (e) => {
//       setEmail(e.target.value);
//       const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       if(!re.test(String(e.target.value).toLowerCase())){
//           setEmailError('Uncorrect');
//       }else{
//         setEmailError('');
//       }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post(DOMEN_SITE, { email, password })
//           .then(res => {
//             console.log(res);
//             if (res.data === true) {
//                 window.location.href = DOMEN_SITE + "/auth"
//             } else {
//                 alert("There is already a user with this email")
//             }
//         }).catch(() => {
//             alert("An error occurred on the server")
//         })
//       }



//     const passwordHandler = (e) => {
//       setPassword(e.target.value)
//       if (e.target.value.length < 3 || e.target.value.length > 15){
//         setPasswordError('Uncorrect');
//         if(!e.target.value){
//           setPasswordError('Not Empty');
//         }
//       }else{
//         setPasswordError('');
//       }
//     }


//     const blurHandler = (e) => {
//       switch (e.target.name) {
//         case 'email':
//           setEmptyEmail(true)
//           break;
//         case 'password':
//           setEmptyPassword(true)
//           break;
//       }
//     }


//     return (


//         <div className="loginForm">
//             <div className="wrapper">
//                 <form onSubmit={e => handleSubmit(e)}>
//                     <h1>Login Page</h1>
//                     {(emptyEmail && emailError) && <div style={{color:"red"}}>{emailError}</div>}
//                     <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Your email" />
//                     {(emptyPassword && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}
//                     <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Your password" />
//                     <button disabled={!formValid} type="button">Log in</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

export default LoginPage;