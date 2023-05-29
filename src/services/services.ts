import axios from 'axios';

const API_BASE_URL = 'https://api.green-api.com/waInstance';

const getChats = async (idInstance: string, apiTokenInstance: string) => {
  const url = `${API_BASE_URL}${idInstance}/getChats/${apiTokenInstance}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getContactInfo = async (
  idInstance: string,
  apiTokenInstance: string,
  data: any
) => {
  const url = `${API_BASE_URL}${idInstance}/GetContactInfo/${apiTokenInstance}`;

  try {
    const response = await axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const sendMessage = async (
  idInstance: string,
  apiTokenInstance: string,
  data: any
) => {
  const url = `${API_BASE_URL}${idInstance}/sendMessage/${apiTokenInstance}`;

  try {
    const response = await axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getChatHistory = async (
  idInstance: string,
  apiTokenInstance: string,
  data: any
) => {
  const url = `${API_BASE_URL}${idInstance}/getChatHistory/${apiTokenInstance}`;

  try {
    const response = await axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getChats, getContactInfo, sendMessage, getChatHistory };
