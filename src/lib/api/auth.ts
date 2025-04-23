// src/lib/api/auth.ts
import axios from 'axios';

const API_BASE = 'http://localhost:3000/auth'; // Đổi URL khi deploy

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${API_BASE}/login`, { email, password });
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export const signup = async (email: string, password: string,name: string) => {
  try {
    const res = await axios.post(`${API_BASE}/signup`, { email, password, name });
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const res = await axios.post(`${API_BASE}/forgot-password`, { email });
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export const resetPassword = async (token: string, password: string) => {
  try {
    const res = await axios.post(`${API_BASE}/reset-password`, { token, password });
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};
