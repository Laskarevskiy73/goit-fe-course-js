import axios from 'axios';
const BASE_URL = 'http://localhost:3000/notes';

export const getNotes = async () => {
  try {
    const notes = await axios.get(BASE_URL);

    return notes.data;
  } catch (error) {
    throw error;
  }
};

export const saveNote = async note => {
  try {
    const response = await axios.post(BASE_URL, note);

    return response.data;
  } catch (error) {
    throw error.message;
  }
};

export const deleteNote = async id => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const patchNote = async (id, priority) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${id}`, {
      priority: priority,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
