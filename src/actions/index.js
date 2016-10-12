import axios from 'axios';

import { FETCH_UPLOADS, AUTH_LOGIN } from './types';

const ROOT_URL = '//stream-react-backend-2-rimchang.c9users.io/';
const CLIENT_ID = 'l9v9gIP17hhcKViF83WGVwcOT16Xh2llngpFdAai';
const CLIENT_SECRET = 'TaxmQUbjTDL6mzO6qCxctBe7944jS8FbvDL8jDfUyt7jkJgto8VcuUrQhuMkr0Jq1pAgW8FXzpg1ZDN3fbYUBfkdkRDMT5OEvYhtdhQxsfEkJbncG29MPkIjj1kAXYPF';

export function fetchUploads () {
    const request = axios.get(`${ROOT_URL}api/uploads/`);
    console.log('hi im fetchupload in  request : ',request);
    return ({
        type: FETCH_UPLOADS,
        payload: request
    });
}

export function authLogin (response) {
    const request = axios.post(`${ROOT_URL}auth/convert-token/`,{
        grant_type:"convert_token",
        client_id : CLIENT_ID,
        client_secret: CLIENT_SECRET,
        backend : 'facebook',
        token : response.accessToken
    });
    console.log('im res',response);
    console.log('im req',request);
    return ({
        type:AUTH_LOGIN,
        payload:null
    });
}