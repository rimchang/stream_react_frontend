import { combineReducers } from 'redux';
import UploadsListReducer from './reducer_uploads_list';
import AuthLoginReducer from './authLogin';

const rootReducer = combineReducers({
  upload_lists: UploadsListReducer,
  auth : AuthLoginReducer
});

export default rootReducer;
