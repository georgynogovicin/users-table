import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSearchSubmit, onSearchReset } from '../../redux/actions/actions';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const usersLength = useSelector((state) => state.users.usersList.length);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(onSearchSubmit(inputValue));
  };

  const handleReset = () => {
    const pages = Math.ceil(usersLength / itemsPerPage);
    const payload = {
      pages,
      itemsPerPage,
    };
    setInputValue('');
    dispatch(onSearchReset(payload));
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          className="form-control mt-4"
          placeholder="Search"
          value={inputValue}
          onChange={handleChange}
        />
        <div className="col mt-4">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Search
          </button>
          <button type="button" className="btn btn-danger mx-2" onClick={handleReset}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
