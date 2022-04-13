import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [statusCode, setStatusCode] = useState();
    const loginHandler = async (e) => {

        e.preventDefault();
        try {
            const { data: { foundUser, encodedToken }, status } = await axios.post('/api/auth/login', {
                email,
                password
            });

            if (status === 200) {
                localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
                localStorage.setItem("user", JSON.stringify({ user: foundUser }));
                setTimeout(() => navigate("/products"), 3000)
            }
            setStatusCode(status)
        }

        catch (error) {
            alert("Your details are not found Please register yourself!!!")
            navigate('/signup')
        }
    };
    return (
        <>
            {statusCode === 200 && (<div class="alert alert-success">
                <span><i class="fas fa-check-circle"></i></span> Login Successfull
            </div>)}
            <div className="form-container">
                <form className="form" action="">

                    <h2 className="form-heading">Login</h2>
                    <label className="form-label" for="Email">Email</label>
                    <input className="form-input" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" />
                    <i className="fa-solid fa-eye-slash" id="togglePassword"></i>
                    <label className="form-label" for="password">Password</label>
                    <input className="form-input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                    <span className="form-checkbox">
                        <a href="/">Forgot Password </a>
                    </span>
                    <span className="form-btn">
                        <button className="btn btn-solid-primary" onClick={loginHandler}>Login</button>
                        <button className="btn btn-outline-primary" href="/Components/Auth/signin.html">Signup </button>
                    </span>
                </form>
            </div>
        </>
    )
}

export default Login