import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/actions/actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const usersLength = useSelector((state) => state.users.usersList.length);
  const pageCount = useSelector((state) => state.pagination.pageCount);

  const changePageHandler = (page) => {
    const start = (page - 1) * itemsPerPage;
    const finish = Math.min(start + itemsPerPage - 1, usersLength - 1);
    const payload = {
      page,
      start,
      finish,
    };
    dispatch(setCurrentPage(payload));
  };

  const pageItems = [];
  for (let i = 1; i < pageCount + 1; i++) {
    const item = (
      <li key={i} className={`page-item ${i === currentPage && 'active'}`}>
        <button type="button" className="page-link" onClick={() => changePageHandler(i)}>
          {i}
        </button>
      </li>
    );
    pageItems.push(item);
  }

  return (
    <nav>
      <ul className="pagination">{pageItems}</ul>
    </nav>
  );
};

export default Pagination;
