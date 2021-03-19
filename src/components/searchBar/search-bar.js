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
            <form onSubmit={handleSubmit} onReset={handleReset} className='col gy-3'>
                <div className='mb-4'>
                    <input type='text' className='form-control' placeholder='Search' value={inputValue} onChange={handleChange} />
                </div>
                <div className='md-col-20'>
                    <button type='submit' className='btn btn-primary'>Search</button>
                    <button type='reset' className='btn btn-danger'>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;