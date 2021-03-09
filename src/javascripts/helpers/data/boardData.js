// BOARDS = AUTHORS

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// BOARDS = AUTHORS //

// GET BOARD
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE PIN
// CREATE PIN
// UPDATE SEARCH
// SEARCH BOOKS

export default getBoards;
