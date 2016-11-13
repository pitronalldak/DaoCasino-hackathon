import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import baseReducer from './base';

const rootReducer = combineReducers({
  base: baseReducer,
  form: formReducer,
});

export default rootReducer;
