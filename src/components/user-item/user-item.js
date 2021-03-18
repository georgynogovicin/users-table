import React from 'react';

const UserItem = ({firstName, lastName, email, phoneNumber, id}) => {
    return (
        <tr>
            <th scope='row'>{id}</th>
            <th>{firstName}</th>
            <th>{lastName}</th>
            <th>{email}</th>
            <th>{phoneNumber}</th>
        </tr>
        // <li>
        //     <div>
        //         <span>Имя: {firstName}</span>
        //         <span>Фамилия: {lastName}</span>
        //         <span>E-mail: {email}</span>
        //         <span>Number: {phoneNumber}</span>
        //     </div>
        // </li>
    )
}

export default UserItem;