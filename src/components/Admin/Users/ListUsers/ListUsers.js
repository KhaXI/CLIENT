import React, { useState, useEffect } from 'react'
import { User } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { Loader } from "semantic-ui-react";
import { size, map } from "lodash";
import { UserItem } from "../UserItem";

const useController = new User();

export function ListUsers(props) {
    const { usersActive, reload , onReload} = props
    const [users, setUsers] = useState(null);
    const { accessToken } = useAuth();

    useEffect(() => {
        (async () => {
            setUsers(null);
            try {
                const response = await useController.getUsers(
                    accessToken,
                    usersActive
                );
                setUsers(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [usersActive, reload])

    if (!users) return <Loader active inline="centered" />
    if (size(users) === 0) return "no hay usuarios"

    return map(users, (user) => <UserItem key={user._id} user={user} onReload={onReload} />)
}