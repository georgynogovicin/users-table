import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit, onSearchReset }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(inputValue)
    }

    const handleReset = () => {
        setInputValue('');
        onSearchReset();
    }
    
    return (
        <div className='row'>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <input type='text' className='form-control mt-4' placeholder='Search' value={inputValue} onChange={handleChange} />
                <div className='col mt-4'>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Search</button>
                    <button type='reset' className='btn btn-danger mx-2' onClick={handleReset} >Clear</button>
            </div>
            </form>
        </div>
    )
}

export default SearchBar;