import React, { useState } from 'react';

const Pagination = () => {
    
    
    return (
        <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <button type='button'className='page-link'><span aria-hidden='true'>&laquo;</span></button>
                </li>
                <li className="page-item"><button className="page-link">1</button></li>
                <li className="page-item"><button className="page-link">3</button></li>
                <li className="page-item"><button className="page-link">4</button></li>
                <li className='page-item'>
                    <button type='button'className='page-link'><span aria-hidden='true'>&raquo;</span></button>
                </li>
            </ul>
        </nav> 
    )
}

export default Pagination;