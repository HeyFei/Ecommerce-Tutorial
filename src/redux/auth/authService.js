import axios from 'axios'

const API_URL = 'http://127.0.0.1/api/user/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    if (response.data && response.data.code == 0) {
        localStorage.setItem('user', JSON.stringify(response.data.data.user_info));
        localStorage.setItem('token', JSON.stringify(response.data.data.access_token));
    }
    return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
    register,
    logout,
    login,
}

export default authService
