import React from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import UserList from "../screens/users/list";
import CreateUser from "../screens/users/create";
import EditUser from "../screens/users/edit";

export default function Users() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>Users</h2>
            <ul>
                <li>
                    <Link to={`${url}`}>List</Link>
                </li>
                <li>
                    <Link to={`${url}/create`}>Create</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <UserList />
                </Route>
                <Route path={`${path}/create`}>
                    <CreateUser />
                </Route>
                <Route path={`${path}/:userId`}>
                    <EditUser />
                </Route>
            </Switch>
        </div>
    );
}