import React from 'react';

const UserItem = (props) => {
    
    const items = props.activeFields.map(item => {
        return ( <td key={props[item]}>{props[item]}</td> )
    })

    return (
        <tr>
            {items}
        </tr>
    )
}

export default UserItem;