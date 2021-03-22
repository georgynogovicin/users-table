import React, { useState } from 'react';
import UserItem from '../user-item';

const UsersList = ( {users, onSort, sortBy} ) => {
    const [ tableHeaders, setTableHeaders ] = useState([
        {
            label: 'id',
            isActive: true
        },
        {
            label: 'firstName',
            isActive: true
        },
        {
            label: 'lastName',
            isActive: true
        },
        {
            label: 'email',
            isActive: true
        },
        {
            label: 'phone',
            isActive: true
        }
    ]);
    const activeFields = tableHeaders.reduce((acc, item) => {
        item.isActive && acc.push(item.label)
        return acc;
    }, [])

    const headers = tableHeaders.map(item => {
        return item.isActive && (<th key={item.label} scope='col'><button type='button' className={`btn btn-outline-secondary ${sortBy === item.label && 'active'}`} onClick={() => onSort(item.label)}>{item.label.toUpperCase()}</button></th>)
    })

    const items = users.map(item => {
        const { id, ...props } = item;
        return (<UserItem key={id} {...props} id={id} activeFields={activeFields} />)
    });
    
    
    return (
        <div className='row mt-4'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList;