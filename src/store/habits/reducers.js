import {
    ADD_HABIT, FETCH_HABITS_ERROR, FETCH_HABITS_START, FETCH_HABITS_SUCCESS, UPDATE_HABITS
} from '../actionTypes.js'

const initialState = {
    habits: [],
    loading: false
}

const habits = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case FETCH_HABITS_START:
            return {
                ...state, loading: true
            }
        case FETCH_HABITS_SUCCESS:
            return {
                habits: payload,
                loading: false
            }
        case FETCH_HABITS_ERROR:
            return {
                loading: true,
                error: payload,
                habits: []
            }
        case ADD_HABIT:
            return {
                ...state,
                habits: [...state.habits, payload]
            }
        case UPDATE_HABITS:
            return{
                ...state,
                habits: payload
            }
            default:
                return state
    }
}
export default habits;