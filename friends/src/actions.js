import axios from 'axios';

export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_SUCCESS'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS ='ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAILED = 'ADD_FRIEND_FAILED'


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
                dispatch({ type: LOGIN_FAILED, payload: err})
            })
    }
}

export function addFriend(friend) {
    return (dispatch) => {
        dispatch({ type: ADD_FRIEND_START })

        const headers = {
            Authorization: localStorage.getItem('token')
        }

        axios.post('http://localhost:5000/api/friends', friend)
            .then((res) => {
                console.log(res)
                dispatch({ type: ADD_FRIEND_SUCCESS, payload: res })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: ADD_FRIEND_FAILED, payload: err })
            })
    }
}