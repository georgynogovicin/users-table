import React, { useState } from 'react';
import UsersList from '../users-list';
import SearchBar from '../searchBar';
import Pagination from '../pagination/';

import './App.css';

function App() {
  const [ searchValue, setSearchValue ] = useState('');
  

  return (
    <div className='container-sm'>
      <SearchBar setSearchValue={setSearchValue} />
      <UsersList searchValue={searchValue} />
      <Pagination />
    </div>
  );
}

export default App;
