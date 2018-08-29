import axios from 'axios';

let base = 'http://localhost:5000';

export const requestLogin = params => { return axios.post(`${base}/auth`, params).then(res => res.data); };