import React from 'react'
import { useNavigate } from "react-router-dom";
function Profile(props) {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem(props.tokenNo);
        navigate('/');
        props.setUserData({});
    }
    return (
        <div className="profile-container">
            <div className='profile'>
                <h1>Profile</h1>
                <h1>Full Name : {props.userData.name}</h1>
                <h1>Email : {props.userData.email}</h1>
                <h1>Password : {props.userData.password}</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Profile
