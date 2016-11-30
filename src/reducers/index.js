import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import UploadsListReducer from './reducer_uploads_list';
import AuthLoginReducer from './authLogin';
import LocationTermReducer from './search';

const rootReducer = combineReducers({
  upload_lists: UploadsListReducer,
  auth : AuthLoginReducer,
  form: formReducer,
  location_term: LocationTermReducer
});

export default rootReducer;
