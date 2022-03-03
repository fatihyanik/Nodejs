import React, {useEffect} from 'react';
import {useNavigate as useHistory} from 'react-router-dom';

export default function Admin() {
    const history = useHistory();
    useEffect(() => {
        const checkuser = async () => {
            const response = await fetch('/checkuser', {
                method: 'POST'
            });
            const result = await response.json();
            if (result !== 'done') {
                history('/');
            } 
        }
        checkuser();
        
    }, [])
  return (
    <h1>welcome admin</h1>
  )
}
