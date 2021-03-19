import {
    ADD_HABIT, UPDATE_HABITS
} from '../actionTypes.js'
import uniqid from 'uniqid'
function createHabitProgress() {
    const days = {};

    const date = new Date()
    const daysInTheMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 1; i < daysInTheMonth + 1; i++) {
        days[i] = null;
    }
    return days;
}
const initialState = {
    habits: [{
        name: 'drink 3l of water',
        habitProgress: createHabitProgress(),
        id: uniqid()
    }]
}

const habits = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case ADD_HABIT:
            return {
                ...state,
                habits: [...state.habits, {
                    name: payload,
                    habitProgress: createHabitProgress(),
                    id: uniqid()
                }]
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