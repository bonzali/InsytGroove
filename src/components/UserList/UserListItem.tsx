import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import {User} from "definitions/user";

type Props = {
    user: User
}


function UserListItem({user}: Props) {

    return (
        <div className={'UserListItem'}>
            <img
                alt={user.name}
                 src={`https://picsum.photos/200/300?random=${user.id}`}
                 className={'profile-image'}/>
            <div className={'details'}>
                <h5>{user.username}</h5>
                <p>{user.email}</p>
            </div>
            <BsArrowRightShort className={'arrow-right'}/>
        </div>
    );
}

export default UserListItem;