import axios from 'axios';

export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_SUCCESS'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED' 

//creating funtion to fetch the friends list from the database
export function getFriends() {
    return (dispatch) => {
        dispatch({ type: GET_FRIENDS_START})

        const headers = {
            Authorization: localStorage.getItem('token')
        }

        axios.get('http://localhost:5000/api/friends', { headers })
            .then((res) => {
                dispatch({ type: GET_FRIENDS_SUCCESS, payload: res})
            })
            .catch((err) => {
                dispatch({ type: GET_FRIENDS_FAILED, payload: err.reponse})
            })
    }
}

export function login(username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START })
        return axios.post('http://localhost:5000/api/login', { username, password })
            .then((res) => {
                console.log('login', res)
                localStorage.setItem('token', res.data.payload)
                dispatch({ type: LOGIN_SUCCESS })
            })
            .catch((err) => {
                console.log('error', err)
                dispatch({ type: LOGIN_FAILED, err})
            })
    }
}