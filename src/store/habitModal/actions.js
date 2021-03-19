import { CLOSE_HABIT_MODAL, SET_HABIT_MODAL } from "../actionTypes"
import {updateHabits} from '../habits/actions'
export const setHabitModal = (habit)=>{
    return {
        type: SET_HABIT_MODAL,
        payload: habit
    }
}
export const updateHabitName = (value)=>{
    return (dispatch, getState) =>{
        const updatedHabits = [...getState().habits.habits];
        updatedHabits.map(habit=>{
            if(habit.id === getState().habitModal.habit.id){
                habit.name = value;
            }
            return habit
        })
        dispatch(updateHabits(updatedHabits))
    }
}
export const deleteHabit = (delHabit)=>{
    return (dispatch,getState) =>{
        const updatedHabits = [...getState().habits.habits];
        dispatch(updateHabits(updatedHabits.filter(habit => habit.id !== delHabit.id)))
    }
}
export const closeModal = ()=>{
    return {
        type: CLOSE_HABIT_MODAL
    }
}