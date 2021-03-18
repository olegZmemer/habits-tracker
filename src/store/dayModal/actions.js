import { CHECK_DAY, CLOSE_MODAL, SET_DAY_MODAL, UPDATE_HABITS } from "../actionTypes"

export const setDayModal = (habit, day)=>{
    return {
        type: SET_DAY_MODAL,
        payload: {
            habit, day 
        }
    }
}

export const checkDay = (checked)=>{
    return (dispatch, getState) =>{
        dispatch(closeModal());
        const newHabitsArray = [...getState().habits.habits];
        const modalData = getState().dayModal;
        newHabitsArray.map((habit)=>{
            if(habit.id!==modalData.habit.id){
                return habit
            }
        })
        const updatedHabit = {
            name: modalData.habit.name
            
        }
        dispatch(updateHabits(
            []
        ))
    }
}
export const updateHabits = (newHabits)=>{
    return {
        type: UPDATE_HABITS,
        payload: newHabits
    }
}
export const closeModal = ()=>{
    return {
        type: CLOSE_MODAL
    }
}