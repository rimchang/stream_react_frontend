import axios from 'axios';

import { FETCH_UPLOADS } from './types';

const ROOT_URL = '//stream-react-backend-2-rimchang.c9users.io/api/';

export function fetchUploads () {
    const request = axios.get(`${ROOT_URL}uploads/`);
    console.log('hi im request : ',request);
    return ({
        type: FETCH_UPLOADS,
        payload: request
    });
}