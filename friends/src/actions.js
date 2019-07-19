import axios from 'axios';

export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_SUCCESS'

//creating funtion to fetch the friends list from the database
export function getFriends() {
    return (dispatch) => {
        dispatch({ type: GET_FRIENDS_START})
        axios.get('http://localhost:5000/api/friends')
            .then((res) => {
                dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                dispatch({ type: GET_FRIENDS_FAILED, payload: err.reponse.data})
            })
    }
}