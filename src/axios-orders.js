import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://reactburger-562df.firebaseio.com/'
});

export default instance;