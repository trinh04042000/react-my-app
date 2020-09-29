import axios from '../configs/axios';

export const all = async () => {
    try {
        const response = await axios.get('Users');
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const remove = async (id) => {
    try {
        const response = await axios.delete(`Users/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const get = async (id) => {
    try {
        const response = await axios.get(`Users/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const create = async (data) => {
    try {
        const response = await axios.post(`Users`, data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const update = async (data) => {
    try {
        const response = await axios.post(`Users/${data.ID}`, data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};