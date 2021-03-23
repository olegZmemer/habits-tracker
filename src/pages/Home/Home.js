import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import DayModal from '../../components/DayModal/DayModal'
import HabitModal from '../../components/HabitModal/HabitModal'
import {useSelector} from 'react-redux'
import StartScreen from '../../components/StartScreen/StartScreen'
export default function Home(){
    const isAuth = useSelector(state => state.auth.isAuth)

    const dayModal = useSelector(state => state.dayModal)
    const habitModal = useSelector(state => state.habitModal)
    return (
        <>
            {habitModal.isOpen && <HabitModal/>}
            {dayModal.isOpen && <DayModal/>}
            <Header/>
            {!isAuth ? <StartScreen/> : <Main/>}
        </>
    )
}