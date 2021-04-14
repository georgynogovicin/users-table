import { combineReducers } from 'redux';

import { users } from './users/users';
import { sort } from './sort/sort';
import { itemsPerPage } from './items-per-page/items-per-page';
import { pagination } from './pagination/pagination';
import { tableHeaders } from './table-headers/table-headers';
import { errors } from './errors/errors';

const rootReducer = combineReducers({ users, sort, itemsPerPage, pagination, tableHeaders, errors });

export { rootReducer };
