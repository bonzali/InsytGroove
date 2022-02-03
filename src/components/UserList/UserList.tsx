import React, {useEffect, useState} from 'react';
import UserListItem from "./UserListItem";
import {getUserList} from "api/user";
import {User} from "definitions/user";
import Loader from "shared/components/Loader";
import './styles.scss'

type Props = {
    onUserSelected: (user: User) => void
}

function UserList({onUserSelected}: Props) {
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await getUserList()
                setUsers(result.data)
                setIsLoading(false)
            } catch (e) {
                setIsLoading(false)
            }        })()
    }, [])


    return (
        <div className={'UserList'}>
            <div>
                {isLoading && <Loader/>}
                {users.map(user => (<div key={user.id} onClick={() => onUserSelected(user)}>
                    <UserListItem user={user}/>
                </div>))}

            </div>
        </div>
    );
}

export default UserList;