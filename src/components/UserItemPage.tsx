import React, {FC, useEffect, useState} from "react";
import {IUser} from "../types/types";
import axios from "axios";
// @ts-ignore
import {useNavigate, useParams} from "react-router-dom";

interface UserItemPageParams {
    id: number;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    // @ts-ignore
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate()

    async function fetchUser() {
        try {
            const response = await axios.get<IUser | null>(`https://jsonplaceholder.typicode.com/users/` + params.id);
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);
    return (
        <div>
            <button onClick={()=> navigate('/users')}> Back </button>
            <h1> {user?.name}</h1>
            <div> {user?.email}</div>
            <div> {user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
        </div>
    );
};

export default UserItemPage;
