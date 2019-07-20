import {
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILED,
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
                errorMessage: action.payload
            }   
        }
        case ADD_FRIEND_START: {
            return {
                ...state,
                isloading: true,
                errorMessage: null,
            }
        }
        case ADD_FRIEND_SUCCESS: {
            console.log('add friend success', action.payload)
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
            }
        }
        case ADD_FRIEND_FAILED: {
            console.log('add friend failed', action)
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            }
        }
        default:
            return state
    }
}