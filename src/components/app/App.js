import React, { useState, useEffect } from 'react';
import UsersList from '../users-list';
import SearchBar from '../searchBar';
import Spinner from '../spinner';
import Pagination from '../pagination/';
import ItemsPerPage from '../items-per-page';
import _ from 'lodash';

function App() {
  const [ users, setUsers ] = useState(null);
  const [ dataIsLoaded, setDataIsLoaded ] = useState(false);
  
  //Sort items by cols
  const [ sortDirection, setSortDirection ] = useState('asc');
  const [ sortBy, setSortBy ] = useState(null);

  //Pagination
  const [ pageOfItems, setPageOfItems ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ pageCount, setPageCount ] = useState(null);
  const [ itemsPerPage, setItemsPerPage ] = useState(10);

  //Search
  const onSearchSubmit = (searchValue) => {
    console.log(searchValue)
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch( `http://www.filltext.com/?rows=150&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}`);
      const data = await res.json();
      const modifiedId = data.map((item) => {
        const signs = 'qwertyuiopasdfghjklzxcvbnm';
        return { ...item, id: item.id + signs.charAt(Math.floor(Math.random() * signs.length))}
      });
      setUsers(_.orderBy(modifiedId, 'firstName', 'asc'));
      setDataIsLoaded(true);
    };
    getData()
  }, []);

  useEffect(() => {
    if (dataIsLoaded) {
      setPageOfItems(users.slice(0, itemsPerPage));
      const pages = Math.ceil(users.length / itemsPerPage);
      setPageCount(pages);
    }
  }, [itemsPerPage, users, dataIsLoaded])

  const onSort = (value) => {
    const newArr = pageOfItems.slice(0);
    const sort = sortDirection === 'asc' ? 'desc' : 'asc';
    const sortedArr = _.orderBy(newArr, value, sort);
    setSortDirection(sort);
    setPageOfItems(sortedArr);
    setSortBy(value);
  }

  const onChangePage = (page) => {
    const start = (page - 1) * itemsPerPage;
    const finish = Math.min((start + itemsPerPage - 1), users.length - 1);
    const newPage = users.slice(start, finish + 1)
    setPageOfItems(newPage);
    setCurrentPage(page);
    setSortBy(null);
  } 

  return (
    <div className='container'>
      <div className='row'>
        <SearchBar onSearchSubmit={onSearchSubmit} />
      </div>
      <div className='row mt-4'>
        <ItemsPerPage setItemsPerPage={setItemsPerPage} />
      </div>
      {dataIsLoaded || <Spinner />}
      {dataIsLoaded && <UsersList users={pageOfItems} onSort={onSort} sortBy={sortBy} itemsPerPage={itemsPerPage} />}
      <Pagination pageCount={pageCount} currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default App;
