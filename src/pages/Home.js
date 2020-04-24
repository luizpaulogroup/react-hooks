import React, { useState, useEffect } from 'react';

import api from '../services/api';

import './styles.css';

export default function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {

        try {

            var since = Math.ceil(Math.random() * 764);

            const { data } = await api.get(`/users?since=${since}`);

            setUsers(data);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="container">
            {users.map(user => (
                <div key={user.id}>
                    <img src={user.avatar_url} alt={user.login} />
                    <p>{user.login}</p>
                </div>
            ))}
        </div>
    )

}