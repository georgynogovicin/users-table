import React, { useState, useEffect } from 'react';
import UsersList from '../users-list';
import SearchBar from '../searchBar';
import Spinner from '../spinner';
import Pagination from '../pagination/';
import ItemsPerPage from '../items-per-page';
import ColsView from '../cols-view';
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
    const newArr = users.filter(item => {
      const values = Object.values(item);
      const regEx = new RegExp(searchValue, 'i');
      return values.some(item => regEx.test(item));
    });
    setPageOfItems(newArr);
    setCurrentPage(1);
    setPageCount(1);
  };

  const onSearchReset = () => {
    setPageOfItems(users.slice(0, itemsPerPage));
    const pages = Math.ceil(users.length / itemsPerPage);
    setPageCount(pages);
    setCurrentPage(1);
  }

  //Get random users & sort by name
  useEffect(() => {
    const getData = async () => {
      const res = await fetch( `https://my.api.mockaroo.com/users.json?key=3c3a0c40`);
      const data = await res.json();
      setUsers(_.orderBy(data, 'firstName', 'asc'));
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
      <SearchBar onSearchSubmit={onSearchSubmit} onSearchReset={onSearchReset} />
      <div className='row justify-content-start mt-4'>
        <ItemsPerPage setItemsPerPage={setItemsPerPage} />
        {dataIsLoaded && <ColsView colons={Object.keys(users[0])}/>}
      </div>
      {dataIsLoaded || <Spinner />}
      {dataIsLoaded && <UsersList users={pageOfItems} onSort={onSort} sortBy={sortBy} itemsPerPage={itemsPerPage} />}
      <Pagination pageCount={pageCount} currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default App;
