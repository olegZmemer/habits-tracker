import { CHECK_DAY, CLOSE_MODAL, SET_DAY_MODAL } from "../actionTypes"

const initialState = {
    habit: {},
    day: 10,
    isOpen: false
}

export default function dayModal (state = initialState, { type, payload }){
    switch (type) {

    case SET_DAY_MODAL:
        return { ...state, habit: payload.habit, day: payload.day, isOpen: true}
    case CLOSE_MODAL:
        return {...state, isOpen: false}
    case CHECK_DAY:
        
        return {...state, }
    default:
        return state
    }
}
