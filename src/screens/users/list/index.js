import React, {useEffect, useState} from "react";
import {all, remove} from "../../../services/user";
import Item from "./item";
import './index.css';

export default function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        setUsers(await all());
    };

    const onDelete = async (user) => {
        const confirm = window.confirm(`Do you want to delete ${user.UserName}`);
        if (confirm) {
            await remove(user.ID);
            alert(`${user.UserName} deleted!`);
        }
    };

    return (
        <div className='container'>
            <h3>List</h3>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 && users.map(user => <Item key={user.ID} user={user} onDelete={() => onDelete(user)}/>)}
                </tbody>
            </table>
        </div>
    );
}