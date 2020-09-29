import React, { useState } from "react";
import { useAuthContext } from "../contexts/authContext";
import { Redirect, Route } from "react-router-dom";

const AuthorizedRoute = ({ children, ...rest }) => {
    const [authState] = useAuthContext();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                authState.accessToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AuthorizedRoute;