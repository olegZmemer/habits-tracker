import { LOGOUT, SIGNIN_SUCCESS } from "../actionTypes"

const initialState = {
    isAuth: false,
    uid: '',
}

export default function auth(state = initialState, { type, payload }) {
    switch (type) {
    case SIGNIN_SUCCESS:
        return { ...state, uid: payload, isAuth: true }
    case LOGOUT: 
        return {isAuth: false, uid: ''}
    default:
        return state
    }
}
