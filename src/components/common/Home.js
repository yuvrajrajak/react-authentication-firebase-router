import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
    const navigate = useNavigate();
    
    const handleLogout = ()=>{
         sessionStorage.removeItem('Auth Token');
         navigate('/login');
    }

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if (authToken) {
            navigate('/home');
        }
        if (!authToken) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <div>Welcome to Home</div>
            <button onClick={handleLogout}>Log Out</button>
        </>

    )
}

export default Home