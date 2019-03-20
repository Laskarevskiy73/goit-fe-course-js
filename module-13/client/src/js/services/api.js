const BASE_URL = 'http://localhost:3000/notes';

export const getNotes = () => {
  return fetch(BASE_URL).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  });
};

export const saveNote = note => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  };

  return fetch(BASE_URL, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  });
};

export const deleteNote = id => {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/${id}`, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  });
};

export const updateNote = (id, updateNote) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateNote),
  };

  return fetch(`${BASE_URL}/${id}`, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  });
};
