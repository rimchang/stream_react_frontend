import _ from 'lodash';
import { FETCH_UPLOADS } from '../actions/types'; 

export default function (state = {},action) {
    
    console.log('im upload list reducer action.paylod.data',action.payload);
    
    switch (action.type) {
        case FETCH_UPLOADS:
            // code
            const newPosts = _.mapKeys(action.payload.data ,'id');
            //console.log('im reducer new post',newPosts);
            return { ...state, ...newPosts};
        
        default:
            // code
            return state;
    }
}