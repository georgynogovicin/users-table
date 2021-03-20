import React from 'react';
import UserItem from '../user-item';

const UsersList = ( {users, onSort, sortBy} ) => {
    const items = users.map(item => {
        const { id, ...props } = item;
        return (<UserItem key={id} {...props} id={id} />)
    });
    
    return (
        <div className='row mt-4'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'><button type='button' className={`btn btn-outline-secondary ${sortBy === 'id' && 'active'}`} onClick={() => onSort('id')}>ID</button></th>
                        <th scope='col'><button type='button' className={`btn btn-outline-secondary ${sortBy === 'firstName' && 'active'}`} onClick={() => onSort('firstName')}>Name</button></th>
                        <th scope='col'><button type='button' className={`btn btn-outline-secondary ${sortBy === 'lastName' && 'active'}`} onClick={() => onSort('lastName')}>Last Name</button></th>
                        <th scope='col'><button type='button' className={`btn btn-outline-secondary ${sortBy === 'email' && 'active'}`} onClick={() => onSort('email')}>Email</button></th>
                        <th scope='col'><button type='button' className={`btn btn-outline-secondary ${sortBy === 'phone' && 'active'}`} onClick={() => onSort('phone')}>Phone number</button></th>
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