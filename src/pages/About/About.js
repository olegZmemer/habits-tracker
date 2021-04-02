import React from 'react'
import css from './About.module.scss'
import Header from '../../components/Header/Header'
function About(){
    return (
        <>
        <Header/>
        <div className={css.wrapper}>
            <div className={css.container}>
                <h1 className={css.title}>Why do you need habits?</h1>
                <p className = {css.text}>Everybody wants to achieve some goals and result, but not everybody can’t do it. There are a lot of reasons of that, but in my opinion main reason is lack of self-discipline. In out fast-growing world everybody used to quick joy and pleasure like cinema, video-games, sugar etc. But when it comes to general things and goals we can’t just take it from shop-counter. These things require long and constant work. That’s the problem. And everyday-habits is our helper and savior in that unwonted activity. To achieve some goal you should move step by step every day for months, years, decades. And that’s why we need strong and useful habits.</p>
            </div>
        </div>
        </>
    )
}
export default About;