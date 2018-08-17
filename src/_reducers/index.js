import { combineReducers } from 'redux';

import { registration } from './registration.reducer';
import { authentication } from './authentication.reducer';
import { selectedFilter, tasksByFilter } from './task.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  selectedFilter,
  tasksByFilter
});

export default rootReducer;
