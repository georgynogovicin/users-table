import React from 'react';

const Pagination = ({ pageCount, currentPage, onChangePage }) => {
    
    const changePageHandler = (page) => {
        onChangePage(page)
    }
    
    let pageItems = [];
    for(let i = 1; i < pageCount + 1; i++) {
        const item = (<li key={i} className={`page-item ${i === currentPage && 'active'}`}><button className="page-link" onClick={() => changePageHandler(i)}>{i}</button></li>)
        pageItems.push(item)
    }
    
    return (
        <nav>
            <ul className='pagination'>
                {pageItems}
            </ul>
        </nav> 
    )
}

export default Pagination;