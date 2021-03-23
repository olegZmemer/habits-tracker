import React, { useState } from 'react'
import css from './StartScreen.module.scss'
import '../../styles/misc/boostrap.scss'
import Auth from '../Auth/Auth'
export default function StartScreen() {
    const [auth, setAuth] = useState(false)
    return (
        <main>
            <div className="container">
                
                {auth?
                <Auth/> 
                : 
                <div className = {css.startScreen}>
                    <h1>Start to increase your life quality with daily-habits!</h1>
                    <button onClick = {()=>setAuth(true)}>Get started</button>
                </div>}
            </div>
        </main>
    )
};
