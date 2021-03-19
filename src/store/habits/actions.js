import { ADD_HABIT, UPDATE_HABITS } from "../actionTypes";

export function addHabit(name){
    console.log(name);
    return {
        type: ADD_HABIT,
        payload: name
    }
}
export const updateHabits = (newHabits)=>{
    return {
        type: UPDATE_HABITS,
        payload: newHabits
    }
}