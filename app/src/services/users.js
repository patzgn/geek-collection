import http from "../http-common";


const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})

export const loginUser = async (credentials) => {
    return 'token'
}

// export const loginUser = async (credentials) => {
//     try {
//         return await http.post(
//             '/login',
//             JSON.stringify(credentials),
//             getAuthConfig
//         ).then(data => data.json())
//     } catch (e) {
//         throw e;
//     }
// }
