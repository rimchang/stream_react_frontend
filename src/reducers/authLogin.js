import _ from 'lodash';
import { AUTH_LOGIN, FETCH_TOKEN, FETCH_USER } from '../actions/types'; 


export default function (state={} , action) {
    //console.log('im authlogin redux action.payload',action.payload);
    switch (action.type) {
        case FETCH_TOKEN:
            // code
            return { ...state, token : action.payload.data };
        
        case FETCH_USER:
            return {...state, user : action.payload};
        default:
            // code
            return state;
    }
}