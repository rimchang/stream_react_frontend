import { FETCH_TERM } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_TERM:
            // code
            return { term : action.payload.data };
        
        default:
            // code
            return state;
    }
}