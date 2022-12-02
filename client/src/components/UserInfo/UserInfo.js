import React, { useEffect } from 'react';
import { getUserInfo } from '../../Api-Interaction/UserServices';

const UserInfo = () => {

    useEffect(() => {
        const user = getUserInfo();
        console.log(user);
    });
    return (
        <div>
            <h1>User Info Page</h1>
        </div>
    )
}

export default UserInfo