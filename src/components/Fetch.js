import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavItem } from 'react-bootstrap';

const MyComponent = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(users)
            } catch (error) {
                console.log(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, [])
    return (
        <>
        {
            loading && <div>loading</div>
        }
        {
            !loading && (
                <div>
                    <h2>doing stuff with data</h2>
                    {
                      data.map((user)=><p key={user.id}>{user.name}</p>)
                    }
                </div>
            )
        }
        </>
    )
}

export default MyComponent;



