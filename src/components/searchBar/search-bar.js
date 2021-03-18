import React, { useState } from 'react';

const SearchBar = ({ setSearchValue }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchValue(inputValue)
    }

    const handleReset = () => {
        setInputValue('');
        setSearchValue('');
    }
    
    return (
        <div className='row'>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className='mb-3'>
                    <label htmlFor='search' className='form-label'>Search</label>
                    <input type='text' className='form-control' placeholder='Search' id='search' value={inputValue} onChange={handleChange} />
                </div>
                <button type='submit' className='btn btn-primary'>Search</button>
                <button type='reset' className='btn btn-danger' style={{marginLeft: '5px'}}>Clear</button>
            </form>
        </div>
    )
}

export default SearchBar;