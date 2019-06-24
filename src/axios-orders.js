import axios from 'axios';

const instance = axios.create({
  baseURL: "https://burger-builder-queen.firebaseio.com/"
});

export default instance;