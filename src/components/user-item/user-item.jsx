import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {
  const { colons, ...rest } = props;

  const items = colons.map(({ label, status }) => {
    return status && <td key={label}>{rest[label]}</td>;
  });

  return <tr>{items}</tr>;
};

UserItem.defaultProps = {
  colons: [
    {
      label: 'firstName',
      status: true,
    },
    {
      label: 'lastName',
      status: true,
    },
  ],
};

UserItem.propTypes = {
  colons: PropTypes.instanceOf(Array),
};

export default UserItem;
