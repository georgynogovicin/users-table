import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../users-list';
import SearchBar from '../searchBar';
import Spinner from '../spinner';
import Pagination from '../pagination';
import ItemsPerPage from '../items-per-page';
import ColsView from '../cols-view';
import { Error } from '../error';
import { getUsers } from '../../redux/actions/actions';

function App() {
  const dispatch = useDispatch();
  const usersIsLoaded = useSelector((state) => state.users.usersIsLoaded);
  const errors = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <SearchBar />
      {errors && <Error />}
      <div className="row justify-content-start mt-4">
        <ItemsPerPage />
        {usersIsLoaded && <ColsView />}
      </div>
      {!usersIsLoaded && <Spinner />}
      {usersIsLoaded && <UsersList />}
      <Pagination />
    </div>
  );
}

export default App;
