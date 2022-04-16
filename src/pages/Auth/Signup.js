import React from 'react'
import axios from 'axios';
import './Signup.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const navigate = useNavigate();
    const { setToken, setUser } = useContext(AuthContext)
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statusCode, setStatusCode] = useState();
    const signupHandler = async (e) => {

        e.preventDefault();
        try {
            const { data: { createdUser, encodedToken }, status } = await axios.post(`/api/auth/signup`, {

                email,
                password,
                firstName

            });
            setStatusCode(status)
            if (status === 201) {
                localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
                setToken(encodedToken);
                localStorage.setItem("user", JSON.stringify({ user: createdUser }));
                setUser(createdUser);
                setTimeout(() =>
                    navigate("/products"), 1000
                )

            }
        }

        catch (error) {

            alert("user already registered");
            navigate("/login");
        }
    };

    return (
        <>
            {statusCode === 201 && (<div class="alert alert-success">
                <span><i class="fas fa-check-circle"></i></span> Successfully registered
            </div>)}

            <div className="form-container">

                <form className="form" action="">

                    <h2 className="form-heading">Sign Up</h2>
                    <label className="form-label" for="Name">Full Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} className="form-input" type="text" placeholder="John Doe" />
                    <label className="form-label" for="Email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="form-input" type="email" placeholder="example@email.com" />
                    <label class="form-label" for="password">Password</label>
                    <i class="fa-solid fa-eye-slash" id="togglePassword"></i>
                    <input onChange={(e) => setPassword(e.target.value)} class="form-input" type="password" placeholder="Create your password" />
                    <label class="form-label" for="password" >Confirm Password</label>
                    <input class="form-input" type="password" placeholder="Type your password again" />
                    <span className="form-checkbox">
                        <input type="checkbox" />
                        <label for="checkbox">I agree with terms</label>
                    </span>
                    <span className="form-btn">
                        <button className="btn btn-solid-primary" onClick={signupHandler}>Sign Up</button>
                        <button className="btn btn-outline-primary" onClick={()=>navigate('/')} >Cancel</button>
                    </span>
                </form>

            </div>
        </>

    )
}

export default Signup;