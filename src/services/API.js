import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BACK_END_URL;
console.log(BASE_URL)
function CreateAccount(body) {
    return axios.post(`${BASE_URL}/auth/sign-up`, body);
}
function CreateSession(body) {
    return axios.post(`${BASE_URL}/auth/sign-in`, body);
}
function LogoutSession(body) {
    return axios.delete(`${BASE_URL}/auth/sign-in`, body);
}
function GetAllItens(body) {
    return axios.delete(`${BASE_URL}/item`, body);
}

const api = {
    CreateAccount,
    CreateSession,
    LogoutSession,
    GetAllItens
};

export default api;
