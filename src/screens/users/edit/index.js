import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {get} from "../../../services/user";
import UserForm from "../UserForm";

export default function EditUser() {
    const {userId} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    }, [userId]);

    const getUser = async () => {
        if (userId) {
            setUser(await get(userId));
        }
    };

    return (
        <div>
            <UserForm user={user} />
        </div>
    );
}