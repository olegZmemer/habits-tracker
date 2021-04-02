import React, {useEffect, useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import '../../styles/misc/boostrap.scss'
import css from './Main.module.scss'
import cx from 'classnames'
import {addHabit, fetchHabits} from '../../store/habits/actions'
import {setDayModal} from '../../store/dayModal/actions'
import {setHabitModal} from '../../store/habitModal/actions'
import {useReactToPrint} from 'react-to-print'
import Loader from '../../ui/Loader/Loader'
export default function Main(){
    const habits = useSelector(state => state.habits.habits);
    const loading = useSelector(state => state.habits.loading)
    const dispatch = useDispatch();
    const [inputName, setName] = useState('') // Contain input change data
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: ()=> componentRef.current
    })
    const months= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    useEffect(()=>{
        dispatch(fetchHabits())
    }, [dispatch])

    
    const createDays = ()=> {
        const date = new Date()
        const daysInTheMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
        // GET CORRECT AMOUNT OF DAYS RELATIVE TO THIS MONTH
        
        let days = [];
        for(let i = 1; i < daysInTheMonth+1; i++){
            days.push(<div className = {css.headerDay} key={`day-${i}`}>{i}</div>);
        }
        
        return days;
    }

    function submitHandler(e, habitName){
        e.preventDefault();
        setName('');
        dispatch(addHabit(habitName));
    }
    function handleDayClick(habit, key){
        dispatch(setDayModal(habit, key))
    }
    function handleHabitClick(habit){
        dispatch(setHabitModal(habit))
    }
    function readHabitProgress(habitObj){ // Display cyrcles with habit-progress relative to habit object
        const days = []
        const progress = habitObj.habitProgress
        for (const key in progress) {
            
            days.push((
            <div 
            key={key} 
            className = {css.habitDay}>
                <div onClick={()=>handleDayClick(habitObj, key)} className={cx(css.habitCyrcle, css[`habitCyrcle-${progress[key]}`])}>
                    
                </div>
            </div>))
        }
        return days
    }

    return (
        <main>
            <div className="container-xl">
              {loading? <Loader/>
                : 
                <div className = {css.table} ref = {componentRef}>
                    <div className = {css.date}>
                        <div className={css.month}>{months[new Date().getMonth()]}</div>
                        <div className={css.year}>{new Date().getFullYear()}</div>
                    </div>
                    <div className = {css.header}>
                        <div className={css.habitsTitle}>Habits</div>
                        {createDays()}
                    </div>
                    <div className={css.main}>
                        {habits.map((habit)=>{
                            return (
                                <div className={css.row} key = {habit.id}>
                                    <div onClick = {()=>handleHabitClick(habit)} className = {css.habitName}>{habit.name}</div>
                                    {readHabitProgress(habit)}
                                </div>
                            )
                        })}
                    </div>
                </div>}
                <div className="row justify-content-between">
                    <form action="" 
                    className = {cx(css.addHabit, 'col-4')} 
                    onSubmit ={(e)=> submitHandler(e, inputName)}>
                        <label htmlFor="habit-name">Add your new habit!</label>
                        
                        <input 
                        type="text" 
                        minLength={3} 
                        id="habit-name" 
                        onChange ={(e)=> setName(e.target.value)} 
                        value = {inputName} 
                        placeholder='ex. Drink 2l. of water'
                        maxLength = {11}
                        />
                        <button type='submit'>ADD</button>
                    </form>
                    <div className="col-3">
                        <button className = {css.print} onClick = {handlePrint}>Print you habit tracker</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
