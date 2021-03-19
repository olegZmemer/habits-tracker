import React, { useState } from 'react'
import css from './HabitModal.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {deleteHabit, updateHabitName} from '../../store/habitModal/actions'
import { closeModal as closeHabitModal } from '../../store/habitModal/actions';

export default function HabitModal() {
    const habit = useSelector(state => state.habitModal.habit);// Acess to global state
    const dispatch = useDispatch();
    
    const [value, setValue] = useState(habit.name)
    const [editor, setEditor] = useState(false);
    
    console.log(value);
    function checkedDayNum(days){ // Get number of checked days 
        let checkedDays = 0;
        for (const key in days) {
            if(days[key] === true){
                checkedDays +=1;
            }
        }
        return checkedDays;
    }
    function changeName(e){
        if((e.key === 'Enter' && editor) || e.type === 'click'){
            setEditor(!editor)
            
            dispatch(updateHabitName(value))
        }
    }
    function closeModal(e){
        if(e.target.id === 'habit-modal'){
            dispatch(closeHabitModal());
        }
    }
    function deleteHabitHandler(){
        dispatch(deleteHabit(habit));
        dispatch(closeHabitModal())
    }
    
    return (
        <div className = {css.modalContainer} id='habit-modal' onClick = {e=>closeModal(e)}>
            <div className={css.modal}>
                <div className = {css.habitTitle}>
                    {
                        editor ? 
                        <input type="text" 
                        onKeyPress ={changeName} 
                        className = {css.input} 
                        value = {value} 
                        onChange={(e)=>setValue(e.target.value)}
                        autoFocus = {true}
                        />
                        : 
                        habit.name
                    }
                
                </div>
                <div className = {css.habitProgress}>
                    <span>You have done it {checkedDayNum(habit.habitProgress)} out of {Object.keys(habit.habitProgress).length} days</span>
                </div>
                <div className={css.habitManage}>
                    <button onClick = {(e)=> editor ? changeName(e): setEditor(!editor)}
                    className = {css.rename}>{editor ? 'Save name' : 'Rename habit'}</button>
                    <button onClick = {deleteHabitHandler} className = {css.delete}>Delete habit</button>
                </div>
            </div>
        </div>
    )
};
