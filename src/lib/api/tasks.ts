import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE = import.meta.env.VITE_API_BASE; 

export const createList = async (name: string, icon: string, color: string) => {
  try {
    const token = Cookies.get('token');
    if (!token) throw new Error('No token found');

    const currentDate = new Date().toISOString(); // lấy ngày hệ thống hiện tại

    const res = await axios.post(
      `${API_BASE}/lists`, // endpoint 
      {
        name,
        icon,
        color,
        dueDate: currentDate // gửi ngày hiện tại làm dueDate
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};


export const getLists = async () => {
  try {
    const token = Cookies.get('token');
    if (!token) throw new Error('No token found');

    console.log(token);
    const res = await axios.get(`${API_BASE}/lists`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export const getListsId = async (id: string) => {
  try {
    const token = Cookies.get('token');
    if (!token) throw new Error('No token found');

    console.log(token);
    const res = await axios.get(`${API_BASE}/lists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export const deleteListById = async (id: string | number) => {
  try {
    const token = Cookies.get('token');
    if (!token) throw new Error('No token found');

    const res = await axios.delete(`${API_BASE}/lists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export const updateListById = async (
  id: string | number,
  updates: {
    name?: string;
    icon?: string;
    color?: string;
  }
) => {
  try {
    const token = Cookies.get('token');
    if (!token) throw new Error('No token found');

    const res = await axios.patch(
      `${API_BASE}/lists/${id}`,
      updates,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};
