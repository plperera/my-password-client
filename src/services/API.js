import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BACK_END_URL;

function CreateAccount(body) {
    return axios.post(`${BASE_URL}/auth/sign-up`, body);
}
function CreateSession(body) {
    return axios.post(`${BASE_URL}/auth/sign-in`, body);
}
function LogoutSession(body) {
    return axios.delete(`${BASE_URL}/auth/sign-in`, body);
}
function GetAllItens(token) {
    return axios.get(`${BASE_URL}/item`, {headers: { Authorization: `Bearer ${token}`}});
}
function CreateNewItem({body, token}) {
    return axios.post(`${BASE_URL}/item`, body, {headers: { Authorization: `Bearer ${token}`}});
}

const api = {
    CreateAccount,
    CreateSession,
    LogoutSession,
    GetAllItens,
    CreateNewItem
};

export default api;
