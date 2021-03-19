import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import DayModal from '../../components/DayModal/DayModal'
import HabitModal from '../../components/HabitModal/HabitModal'
import {useSelector} from 'react-redux'

export default function Home(){
    const dayModal = useSelector(state => state.dayModal)
    const habitModal = useSelector(state => state.habitModal)
    return (
        <React.Fragment>
            {habitModal.isOpen && <HabitModal/>}
            {dayModal.isOpen && <DayModal/>}
            <Header/>
            <Main/>
        </React.Fragment>
    )
}