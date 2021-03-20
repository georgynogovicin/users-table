import React, { useState } from 'react';

const ItemsPerPage  = ({ setItemsPerPage }) => {
    const [ isActive, setIsActive ] = useState(false);
    
    const onItemClickHandler = (value) =>  {
        setIsActive(false);
        setItemsPerPage(value)
    }

    const items = [10, 30, 50, 100].map(item => {
        return (<li key={item}><button type='button' className='dropdown-item' onClick={() => onItemClickHandler(item)} >{item} items</button></li>)
    })


    return (
        <div className='col dropdown'>
                <button type='button' className='btn btn-primary dropdown-toggle' id='items-per-page' onClick={() => setIsActive(!isActive)}>Items per page</button>
                <ul className='dropdown-menu' aria-labelledby='items-per-page' style={{display: `${isActive ? 'block' : 'none'}`}}>
                    {items}
                </ul>
        </div>
    )
}

export default ItemsPerPage;