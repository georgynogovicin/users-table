import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
import UsersList from '../users-list';
import SearchBar from '../searchBar';
import Spinner from '../spinner';
import Pagination from '../pagination';
import ItemsPerPage from '../items-per-page';
import ColsView from '../cols-view';

function App() {
  const [users, setUsers] = useState(null);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  //  Sort items by cols
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortBy, setSortBy] = useState(null);

  //  Pagination
  const [pageOfItems, setPageOfItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  //  Search
  const onSearchSubmit = (searchValue) => {
    const newArr = users.filter((item) => {
      const values = Object.values(item);
      const regEx = new RegExp(searchValue, 'i');
      return values.some((value) => regEx.test(value));
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
  };

  //  Colons view
  const [colons, setColons] = useState(null);

  //  Get random users & sort by name
  const getData = async () => {
    const res = await fetch(`https://my.api.mockaroo.com/users.json?key=3c3a0c40`);
    const data = await res.json();
    const tableHeaders = Object.keys(data[0]).map((item) => {
      return { label: item, status: true };
    });
    setUsers(lodash.orderBy(data, 'firstName', 'asc'));
    setColons(tableHeaders);
    setDataIsLoaded(true);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (dataIsLoaded) {
      setPageOfItems(users.slice(0, itemsPerPage));
      const pages = Math.ceil(users.length / itemsPerPage);
      setPageCount(pages);
    }
  }, [itemsPerPage, users, dataIsLoaded]);

  const onSort = (value) => {
    const newArr = pageOfItems.slice(0);
    const sort = sortDirection === 'asc' ? 'desc' : 'asc';
    const sortedArr = lodash.orderBy(newArr, value, sort);
    setSortDirection(sort);
    setPageOfItems(sortedArr);
    setSortBy(value);
  };

  const onChangePage = (page) => {
    const start = (page - 1) * itemsPerPage;
    const finish = Math.min(start + itemsPerPage - 1, users.length - 1);
    const newPage = users.slice(start, finish + 1);
    setPageOfItems(newPage);
    setCurrentPage(page);
    setSortBy(null);
  };

  const onChangeColons = (headers) => {
    setColons(headers);
  };

  return (
    <div className="container">
      <SearchBar onSearchSubmit={onSearchSubmit} onSearchReset={onSearchReset} />
      <div className="row justify-content-start mt-4">
        <ItemsPerPage setItemsPerPage={setItemsPerPage} />
        {dataIsLoaded && <ColsView colons={colons} onChangeColons={onChangeColons} />}
      </div>
      {dataIsLoaded || <Spinner />}
      {dataIsLoaded && (
        <UsersList users={pageOfItems} onSort={onSort} sortBy={sortBy} itemsPerPage={itemsPerPage} colons={colons} />
      )}
      <Pagination pageCount={pageCount} currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default App;
