import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import DayModal from '../../components/DayModal/DayModal'
import {useSelector} from 'react-redux'
export default function Home(){
    const dayModal = useSelector(state => state.dayModal)
    return (
        <React.Fragment>
            {dayModal.isOpen && <DayModal/>}
            <Header/>
            <Main/>
        </React.Fragment>
    )
}