import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    } 

    return req;
});


export const signIn = (formData) => API.post('/signIn', formData);
export const signUp = (formData) => API.post('/signUp', formData);
export const restaurants = () => API.get('/restaurants');

export const payUsingPaytm = (data) => API.post('/payment', data);

