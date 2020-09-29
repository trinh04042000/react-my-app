import React, { useState } from "react";
import { useAuthContext } from "../../contexts/authContext";
import { loginAction } from "../../actions/authActions";
import { useHistory, useLocation } from "react-router-dom";

export default function Login() {
    const history = useHistory();
    const location = useLocation();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [authState, authDispatch] = useAuthContext();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = {
            user: {
                userName: userName,
            },
            accessToken: "token",
        };

        authDispatch(loginAction(auth));
        localStorage.setItem('auth', JSON.stringify(auth));
        history.replace(from);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>User name</label>
                <input
                    type="text"
                    name="username"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <input type="submit" value="Log In" data-test="submit" />
            </form>
        </div>
    );
}