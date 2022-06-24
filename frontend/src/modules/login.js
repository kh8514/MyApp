
import useAxios from './axios.js'
const { axiosPut, axiosPost} = useAxios()

export default () => {
    const checkToken = (email, token) =>
        new Promise((resolve, reject) => {
            axiosPost(
                `/db/accounts/check-token/${email}/${token}`,
                {},
                (data) => {
                    resolve(data)
                },
                (data) => {
                    reject(data)
                }
            )
        })

    const updatePassword = (email, password, oldPassword) =>
        new Promise((resolve, reject) => {
            axiosPut(
                `/db/accounts/${email}/${password}/${oldPassword}`,
                {},
                (data) => {
                    resolve(data)
                },
                (data) => {
                    reject(data)
                }
            )
        })
    
    const login = (email, password) =>
        new Promise((resolve, reject) => {
            axiosPost(
                `/db/accounts/login/${email}/${password}`,
                {},
                (data) => {
                    resolve(data)
                },
                (data) => {
                    reject(data)
                }
            )
        })

    return {
        checkToken,
        updatePassword,
        login,
    }
}

