import { combineReducers } from 'redux';

import { registration } from './registration.reducer';
import { authentication } from './authentication.reducer';
import { tasksFetch } from './task.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  tasksFetch
});

export default rootReducer;
