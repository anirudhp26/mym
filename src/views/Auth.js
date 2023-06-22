import React from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css'
export default function Auth() {
    const [loginsignupToggle, setLoginsignuptoggle] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cpassword, setcPassword] = React.useState('');
    const navigate = useNavigate();
    const btntoggle = () => {
        setLoginsignuptoggle(!loginsignupToggle);
    }
    Axios.defaults.withCredentials = true;
    const formSubmitlogin = () => {
        document.getElementById("loader").style.display = "flex";
        Axios.post(`https://backend-sm.vercel.app/auth/login`, {username: username, email: email, password: password}).then((response) => {
            console.log(response);
            if (response.data.loginStatus === true) {
                navigate('/home');
            }
        })
    }
    const formSubmitsignup = () => {
        document.getElementById("loader").style.display = "flex";
        Axios.post('https://backend-sm.vercel.app/auth/signup', {username: username, email: email, password: password}).then((response) => {
            navigate('/home');
        })
    }
    const passwordCompare = () => {
        if (password !== cpassword) {
            return(
                <p className='chkpass-alert'>* Passwords don't match, Re-check!</p>
            )
        }
        else{
            return null;
        }
    }

    const loginsignupform = () => {
        if (loginsignupToggle === true) {        
            return (
                <div className="body">
                    <div className="container-login">
                        <p className="heading">LOGIN</p>
                        <input type="text" placeholder='username' className="authInput" onChange={(e) => {
                            setEmail(e.target.value);
                            setUsername(e.target.value);
                        }}></input>
                        <input type="password" placeholder='password' className="authInput" onChange={(e) => {
                            setPassword(e.target.value);
                        }}></input>
                        <button className="authButton" onClick={formSubmitlogin}>
                            Login
                        </button>
                        <div className="moreSection">
                            <p style={{ margin: 'auto', fontSize: '15px', fontFamily: "'Anton', sans-serif" }}>Don't have an Account?</p>
                            <button className="moreButton" onClick={btntoggle}>
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="body">
                    <div className="container-signup">
                        <p className="heading">SIGN UP</p>
                        <input type="text" placeholder='Username' className="authInput" onChange={(e) => {
                            setUsername(e.target.value);
                        }}></input>
                        <input type="password" placeholder='Password' className="authInput" onChange={(e) => {
                            setPassword(e.target.value);
                        }}></input>
                        <input type="password" placeholder=' Confirm Password' className="authInput" onChange={(e) => {
                            setcPassword(e.target.value);
                        }}></input>
                        {passwordCompare()}
                        <button className="authButton" onClick={formSubmitsignup}>
                            SignUp
                        </button>
                        <div className="moreSection">
                            <p style={{ margin: 'auto', fontSize: '15px', fontFamily: "'Anton', sans-serif" }}>Already have an Account?</p>
                            <button className="moreButton" onClick={btntoggle}>
                                Login
                            </button>
                            <div className="g-signin2" data-onsuccess="onSignIn"></div>
                        </div>
                    </div>
                </div>
            )
        }

    }

    return(
        <>
            {loginsignupform()}
        </>
    )
}