import { combineReducers } from 'redux';
import UploadsListReducer from './reducer_uploads_list';

const rootReducer = combineReducers({
  upload_lists: UploadsListReducer
});

export default rootReducer;
