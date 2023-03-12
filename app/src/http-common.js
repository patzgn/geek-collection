import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

export default axios.create({
    baseURL: BASE_URL
})

// privateAxios.interceptors.request.use(
//     (config) => {
//       const token = getToken();
  
//       if (token) {
//         config.headers.common.Authorization = `Bearer ${token}`;
//         // console.log(config);
//       }
  
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );
