import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import css from './DayModal.module.scss'
import { checkDay } from '../../store/dayModal/actions';
export default function DayModal() {
    const habit = useSelector(state => state.dayModal.habit);
    const habitDay = useSelector(state => state.dayModal.day);
    const dispatch = useDispatch();
    return(
        <div className={css.modalContainer}>
            <div className={css.modal}>
                <div id='dayModal' className={css.modalTitle}>Have you done "{habit.name}" this day?</div>
                <div className={css.modalButtons}>
                    <button onClick = {()=>dispatch(checkDay(true, habitDay))} className = {css.yesButton}>Yes! :)</button>
                    <button onClick = {()=>dispatch(checkDay(false, habitDay))} className = {css.noButton}>No :(</button>
                </div>
            </div>
        </div>
    )
};
