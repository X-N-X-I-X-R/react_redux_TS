import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../slicers/loginslicer';
import { RootState } from '../../app/store';

const LoginComponent = () => {
    const dispatch = useDispatch();
    const loginState = useSelector((state: RootState) => state.login.value);
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        dispatch(login(username));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <h1 className='h1'>Login Component</h1>
            {loginState ? (
                <>
                    <p className='h1'>Welcome, {loginState}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <input type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </>
            )}
        </div>
    );
};

export default LoginComponent;