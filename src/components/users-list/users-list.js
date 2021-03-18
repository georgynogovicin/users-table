import React, { useState, useEffect } from 'react';
import UserItem from '../user-item';
import ItemsPerPage from '../items-per-page';
import data from '../../db';

const UsersList = ({searchValue}) => {
    const [ users, setUsers ] = useState([]);
    const [ sortedUsers, setSortedUsers ] = useState(users);
    const [ itemsPerPage, setItemsPerPage ] = useState(10);

    useEffect(() => {
        setUsers(JSON.parse(data));
    }, [])

    useEffect(() => {
        const newArr = searchHandler(searchValue, users);
        setSortedUsers(newArr);
    }, [searchValue, users])

    const searchHandler = (value, arr) => {
        return arr.filter(item => {
            const values = Object.values(item);
            const regExp = new RegExp(value);
            return values.some(item => regExp.test(item));
        })
    }
    
    
    const items = sortedUsers.map(item => {
        const {id, ...props } = item;
        console.log(item)
        return <UserItem key={id} {...props} id={id} />
    }).slice(0, itemsPerPage);
    
    return (
        <>
        <div className='row'>
               <ItemsPerPage setItemsPerPage={setItemsPerPage} /> 
        </div>
        <div className='row'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Имя</th>
                        <th scope='col'>Фамилия</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Номер</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                
            </table>
        </div>
        </>
    )
}

export default UsersList;