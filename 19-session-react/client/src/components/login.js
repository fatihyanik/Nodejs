import React, {useState, useEffect } from 'react';
import {useNavigate as useHistory} from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    useEffect(() => {
        const checkuser = async () => {
            const response = await fetch('/checkuser',{
                method: 'POST'
            });
            const result = await response.json();
            if (result === 'done') {
                history('/admin');
            }
        }
        checkuser();
    }, [])

    const loginBtnClick = async () => {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const result = await response.json();
        if (result === 'done') {
            history('/admin');
        } else {
            alert('login error');
        }
    }

  return (
    <>
    <div>
        <label htmlFor='usernameInp'>Username</label>
        <input value={username} onChange={e => setUsername(e.target.value)}  id='usernameInp' type='text' />
    </div>
    <div>
        <label htmlFor='passwordInp'>Username</label>
        <input value={password} onChange={e => setPassword(e.target.value)} id='passwordInp' type='password' />
    </div>
    <button onClick={loginBtnClick}>Login</button>
    </>
  )
}
