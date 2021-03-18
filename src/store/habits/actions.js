import { ADD_HABIT } from "../actionTypes";

export function addHabit(name){
    console.log(name);
    return {
        type: ADD_HABIT,
        payload: name
    }
}