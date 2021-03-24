import {
    CLOSE_DAY_MODAL,
    SET_DAY_MODAL
} from "../actionTypes"

const initialState = {
    habit: {},
    day: null,
    isOpen: false
}

export default function dayModal(state = initialState, {
    type,
    payload
}) {
    switch (type) {

        case SET_DAY_MODAL:
            return {
                ...state, habit: payload.habit, day: payload.day, isOpen: true
            }
            case CLOSE_DAY_MODAL:
                return {
                    habit: {},
                    day: null,
                    isOpen: false
                }
            
            default:
                return state
    }
}