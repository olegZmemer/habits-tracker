import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import cx from 'classnames'
import css from './DayModal.module.scss'
export default function DayModal() {
    const habit = useSelector(state => state.dayModal.habit)
    return(
        <div className={css.modalContainer}>
            <div className={css.modal}>
                <div id='dayModal' className={css.modalTitle}>Have you done "{habit.name}" this day?</div>
                <div className={css.modalButtons}>
                    <button className = {css.yesButton}>Yes! :)</button>
                    <button className = {css.noButton}>No :(</button>
                </div>
            </div>
        </div>
    )
};
