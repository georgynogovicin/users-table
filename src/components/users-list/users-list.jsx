import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderBy } from 'lodash';
import { sortPageOfUsers } from '../../redux/actions/actions';
import UserItem from '../user-item';

const UsersList = () => {
  const users = useSelector((state) => state.users.pageOfUsers);
  const sortBy = useSelector((state) => state.sort.sortBy);
  const sortDirection = useSelector((state) => state.sort.sortDirection);
  const colons = useSelector((state) => state.tableHeaders);

  const dispatch = useDispatch();

  const onSortHandler = (label) => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    const sortedPage = orderBy(users, label, direction);
    dispatch(sortPageOfUsers(label, sortedPage));
  };

  const items = users.map((item) => {
    const { id, ...props } = item;
    return <UserItem key={id} {...props} id={id} colons={colons} />;
  });

  const headers = colons
    .filter(({ status }) => status)
    .map((item) => (
      <th key={item.label} scope="col">
        <button
          type="button"
          className={`btn btn-outline-secondary ${sortBy === item.label && 'active'}`}
          onClick={() => onSortHandler(item.label)}
        >
          {item.label.toUpperCase()}
        </button>
      </th>
    ));

  return (
    <div className="row mt-4">
      <table className="table table-striped">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

export default UsersList;
