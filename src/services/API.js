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
function UpdateNewItem({body, token}) {
    return axios.put(`${BASE_URL}/item`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function GetItemData({ query, token }) {
    return axios.get(`${BASE_URL}/item/unique`, {
        headers: { Authorization: `Bearer ${token}` },
        params: query
    });
}
function DeleteItem({body, token}) {
    return axios.delete(`${BASE_URL}/item`, {headers: { Authorization: `Bearer ${token}`}, data: body});
}

const api = {
    CreateAccount,
    CreateSession,
    LogoutSession,
    GetAllItens,
    CreateNewItem,
    GetItemData,
    UpdateNewItem,
    DeleteItem
};

export default api;
