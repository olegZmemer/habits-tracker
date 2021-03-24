import { CLOSE_DAY_MODAL, SET_DAY_MODAL} from "../actionTypes"
import {updateHabits} from '../habits/actions'
export const setDayModal = (habit, day)=>{
    return {
        type: SET_DAY_MODAL,
        payload: {
            habit, day 
        }
    }
}

export const checkDay = (checked, day)=>{
    return (dispatch, getState) =>{
        parseInt(day)
        const updatedHabits = [...getState().habits.habits];
        updatedHabits.map(habit=>{
            if(habit.id === getState().dayModal.habit.id){
                habit.habitProgress[day] = checked;
            }
            return habit
        })
        dispatch(updateHabits(updatedHabits));
        dispatch(closeModal());
    }
}

export const closeModal = ()=>{
    return {
        type: CLOSE_DAY_MODAL
    }
}