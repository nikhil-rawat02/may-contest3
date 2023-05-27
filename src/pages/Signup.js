import React, { useState } from 'react'
import { randomNumber } from '../components/RandomNumberGenerator';
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("");
    
    const navigate = useNavigate();

    function handleSignup(event) {
        event.preventDefault();
        if(name.trim().split(" ").length < 2){
            setError("Error : Enter full name");
            return;
        }else if(name === "" || email === "" || password === "" || confirmPassword === "" ){
            
            setError("Error : All the fields are mandatory");
            return;
        }else if(!email.includes('@')){
            setError("Error : Enter valid email");
            return;
        } else if(password !== confirmPassword){
            setError("Error : password and confirmPassword not matched")
            return;
        }else{
            setError("");
            setSuccess("Successfully Signed Up!")
            // get 16 bit random id
            const id = randomNumber;
            const userDataObject = {
                "name" : name,
                "email": email,
                "password" : password
            }

            localStorage.setItem(id, JSON.stringify(userDataObject))
            props.setToken(id)
            props.setUserData(userDataObject); 
            navigate('profile')
            return;
        }
    }
    
    return (
        <div className="sign-up-container">
            <div className='sign-up'>
                <h1>Signup</h1>
                <form>
                    <input type="text" placeholder='Full Name' onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' autoComplete='on' onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder='Confirm Password' autoComplete='on' onChange={e => setConfirmPassword(e.target.value)} />
                    <p className="error" >{error}</p>
                    <p className="success">{success}</p>
                    <button className="signup" onClick={(event)=>handleSignup(event)} >Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
