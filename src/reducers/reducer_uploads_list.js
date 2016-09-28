import { FETCH_UPLOADS } from '../actions/types'; 

export default function (state = [],action) {
    console.log(action.payload);
    console.log(action.type);
    switch (action.type) {
        case FETCH_UPLOADS:
            // code
            console.log('im in fetch upload case');
            console.log(action.payload.data);
            return action.payload.data;
        
        default:
            // code
            return state;
    }
}