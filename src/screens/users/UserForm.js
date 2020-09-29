import React, {useEffect, useState} from "react";
import AppButton from "../../components/AppButton";
import {create, update} from "../../services/user";

export default function UserForm({user}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setUserName(user.UserName);
            setPassword(user.Password);
        }
    }, [user]);

    const save = async () => {
        setLoading(true);
        if (user) {
            await update({
                ID: user.ID,
                UserName: username,
                Password: password
            });
        } else {
            await create({
                UserName: username,
                Password: password
            });
        }
        setLoading(false);
        alert(`User ${user ? 'updated' : 'created'}`);
    };

    return (
        <div>
            <label htmlFor="id">
                ID
            </label>
            <input name='id' disabled value={user?.ID || ''} />

            <label htmlFor="username">
                Username
            </label>
            <input name='username' value={username} onChange={event => setUserName(event.target.value)} />

            <label htmlFor="password">
                Password
            </label>
            <input name='password' value={password} onChange={event => setPassword(event.target.value)} />

            <br/>
            <br/>
            <br/>
            <AppButton loading={loading} text='Save' onClick={() => save()}/>
        </div>
    );
}