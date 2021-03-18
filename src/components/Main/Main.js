import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import '../../styles/misc/boostrap.scss'
import css from './Main.module.scss'
import cx from 'classnames'
import {addHabit} from '../../store/habits/actions'
import {setDayModal} from '../../store/dayModal/actions'
export default function Main(){
    const habits = useSelector(state => state.habits.habits);
    const dispatch = useDispatch();

    const [inputName, setName] = useState('') // Contain input change data

    const createDays = ()=> {
        const date = new Date()
        const daysInTheMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
        // GET CORRECT AMOUNT OF DAYS RELATIVE TO THIS MONTH
        
        let days = [];
        for(let i = 1; i < daysInTheMonth+1; i++){
            days.push(<th className = {css.headerDay} key={`day-${i}`}>{i}</th>);
        }
        
        return days;
    }

    function submitHandler(e, habitName){
    e.preventDefault()
    dispatch(addHabit(habitName))
    }
    function handleDayClick(habit, key){
        dispatch(setDayModal(habit, key))
    }
    function readHabitProgress(habitObj){ // Display cyrcles with habit-progress relative to habit object
        const days = []
        const progress = habitObj.habitProgress
        for (const key in progress) {
            days.push((
            <td 
            key={key} 
            className = {css.habitDay}>
                <div onClick={()=>handleDayClick(habitObj, key)} className={cx(css.habitCyrcle, css[`habitCyrcle-${progress[key]}`])}>
                    
                </div>
            </td>))
        }
        return days
    }

    return (
        <main>
            <div className="container">
                <table className = {css.table}>
                    <thead>
                    <tr>
                        <th className = {css.habitsTitle}>Habits</th>
                        {createDays()}
                    </tr>
                    </thead>
                    <tbody>
                        {habits.map((habit)=>{
                            return (
                                <tr key = {habit.id}>
                                    <td className = {css.habitName}>{habit.name}</td>
                                    {readHabitProgress(habit)}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <form action="" 
                className = {css.addHabit} 
                onSubmit ={(e)=> submitHandler(e, inputName)}>
                    <label htmlFor="habit-name">Add your new habit!</label>
                    
                    <input 
                    type="text" 
                    minLength={3} 
                    id="habit-name" 
                    onChange ={(e)=> setName(e.target.value)} 
                    value = {inputName} 
                    placeholder='ex. Drink 2l. of water'/>
                    
                    <button type='submit'>ADD</button>
                </form>
            </div>

        </main>
    )
}
