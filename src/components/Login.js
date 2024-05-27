import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userlist, setUserList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(res => setUserList(res.data))
            .catch(err => console.log(err));
    }, []);

    const handlelogin = (e) => {
        e.preventDefault();
        
        if (userlist && userlist.length > 0) {
            const userExists = userlist.some(u => u.username === username && u.password === password);
            if (userExists) {
                // Redirect to '/calculate' route
                navigate('/calculate');
            } else {
                alert("Invalid username or password");
            }
        } else {
            alert("User list is not available. Please try again later.");
        }
    };

    return (
        <div className='loginpage'>
            <h1 style={{ textAlign: 'center', textDecoration: 'none' }}>Login page</h1>
            <form onSubmit={handlelogin}>
                <label>Username:</label>
                <input type='text' value={username} placeholder={'Username'} onChange={(e) => setUsername(e.target.value)} />
                <br /><br />
                <label>Password:</label><br />
                <input type='password' className='password' value={password} placeholder={'Password'} onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <button type='submit'>Login</button><br /><br />
                <Link className='flink' to="/signup">Don't have an account? signup</Link><br></br>
            </form>
        </div>
    );
};
