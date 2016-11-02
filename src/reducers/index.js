import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import UploadsListReducer from './reducer_uploads_list';
import AuthLoginReducer from './authLogin';

const rootReducer = combineReducers({
  upload_lists: UploadsListReducer,
  auth : AuthLoginReducer,
  form: formReducer
});

export default rootReducer;
