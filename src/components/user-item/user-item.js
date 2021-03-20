import React from 'react';

const UserItem = ({firstName, lastName, email, phone, id}) => {
    return (
        <tr>
            <th scope='row'>{id}</th>
            <th>{firstName}</th>
            <th>{lastName}</th>
            <th>{email}</th>
            <th>{phone}</th>
        </tr>
    )
}

export default UserItem;