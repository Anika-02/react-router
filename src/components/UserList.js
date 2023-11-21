import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users: ', error));
    }, []);

    const handleAlbumsClick = (userId) => {
        navigate(`/albums/${userId}`);
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} {' '}
                        <button onClick={() => handleAlbumsClick(user.id)}>Albums</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
