/*eslint-disable */
import React from 'react';
import UserItem from '../user-item';

const UsersList = ({ users, onSort, sortBy, colons }) => {
  const items = users.map((item) => {
    const { id, ...props } = item;
    return <UserItem key={id} {...props} id={id} colons={colons} />;
  });

  const headers = colons.map((item) => {
    return (
      item.status && (
        <th key={item.label} scope="col">
          <button
            type="button"
            className={`btn btn-outline-secondary ${sortBy === item.label && 'active'}`}
            onClick={() => onSort(item.label)}
          >
            {item.label.toUpperCase()}
          </button>
        </th>
      )
    );
  });

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