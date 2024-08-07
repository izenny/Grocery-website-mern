// import axios from "axios";


// const BASE_URL = 'http://localhost:5000/';
// const Token = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userDetails).userInfo[0] ?
// JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userDetails).userInfo[0].token : null
// console.log('final token',Token);

// export const publicRequest = axios.create({
//     baseURL:BASE_URL,
// })
// export const userRequest = axios.create({
//     baseURL:BASE_URL,
//     headers:{token : `Beares ${Token}`}
// })
import axios from "axios";

const BASE_URL = 'http://localhost:5000/';
let token = null;

// Safely parse token from localStorage
try {
  const persistUser = JSON.parse(localStorage.getItem('persist:user'));
  if (persistUser && persistUser.userDetails) {
    const userDetails = JSON.parse(persistUser.userDetails);
    if (userDetails.userInfo && userDetails.userInfo[0]) {
      token = userDetails.userInfo[0].token;
    }
  }
} catch (error) {
  console.error('Error parsing token from localStorage:', error);
}

console.log('final token', token);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` },
});
