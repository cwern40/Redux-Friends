import {
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './actions'

const initialState = {
    friends: [],
    isLoading: false,
    errorMessage: null,
}

export default function(state= initialState, action) {
    switch (action.type) {
        //action of loading the friends list from the remote server
        case GET_FRIENDS_START: {
            return {
                ...state,
                isloading: true,
                errorMessage: null,
            }
        }
        //action of successfully obtaining the friends list
        case GET_FRIENDS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                friends: action.payload.data,
                errorMessage: null,
            }
        }
        //action of failing to obtain the friends list
        case GET_FRIENDS_FAILED: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        }
        case LOGIN_START: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                errorMessage: false
            }
        }
        case LOGIN_FAILED: {
            return{
                ...state,
                isloading: false,
                errorMessage: null
            }   
        }
        default:
            return state
    }
}