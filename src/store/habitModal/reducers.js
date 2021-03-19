import { CLOSE_HABIT_MODAL, SET_HABIT_MODAL } from "../actionTypes";

const initialState = {
    habit: {},
    isOpen: false
}

const habitModal =(state = initialState, { type, payload }) => {
    switch (type) {

    case SET_HABIT_MODAL:
        return { ...state, habit: payload ,isOpen: true }
    case CLOSE_HABIT_MODAL:
        return {...state, isOpen: false}
    default:
        return state
    }
}
export default habitModal;
