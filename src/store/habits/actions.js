import {
    ADD_HABIT,
    FETCH_HABITS_ERROR,
    FETCH_HABITS_SUCCESS,
    UPDATE_HABITS,
    FETCH_HABITS_START
} from "../actionTypes";
import {
    addHabit as addHabitToDb,
    getHabits,
    updateHabits as updateDbHabits
} from '../../api/api';
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
export function addHabit(name) {
    const habitObj = {
        name,
        habitProgress: createHabitProgress(),
        id: uniqid()
    }
    addHabitToDb(habitObj)
    return {
        type: ADD_HABIT,
        payload: habitObj
    }
}
export function fetchHabits() {
    return dispatch => {
        dispatch(fetchHabitsStart());
        getHabits().then(habits => {
            
            dispatch(fetchHabitsSuccess(habits))
        }).catch(err => {
            dispatch(fetchHabitsError(err))
        });
    }
}
export function fetchHabitsStart() {
    return {
        type: FETCH_HABITS_START
    }
}
export function fetchHabitsSuccess(habits) {
    return {
        type: FETCH_HABITS_SUCCESS,
        payload: habits
    }
}
export function fetchHabitsError(err) {
    return {
        type: FETCH_HABITS_ERROR,
        payload: err
    }
}
export const updateHabits = (newHabits) => {
    
    updateDbHabits(newHabits)
    return {
        type: UPDATE_HABITS,
        payload: newHabits
    }
}