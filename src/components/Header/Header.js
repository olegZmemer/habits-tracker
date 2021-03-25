import React from 'react'
import cx from 'classnames'
import css from './Header.module.scss'
import '../../styles/misc/boostrap.scss'
import {Link} from 'react-router-dom'
import { logout } from '../../store/auth/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {
    const dispatch = useDispatch()
    const authed = useSelector(state => state.auth.isAuth)
    return (

    <div className = {css.header}>
        <div className = 'container-xl'>
            <nav>
                <div className="row">
                    <div className = {cx('col-md-3', css.header__logo)}>
                        <Link to = '/'>Habits Tracker</Link>
                    </div>
                    <div className={cx('col-md-6', css.header__list)}>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            {
                                authed ? <li>
                                <Link to='/habits'>My habits</Link>
                            </li> : null
                            }
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div className = {cx('col-md-3', css.header__user)}>
                        <button onClick= {()=> dispatch(logout())} className = {css.logout}>Logout</button>
                        <img className = {css.avatar} src='https://picsum.photos/50' alt="avatar"/>
                    </div>
            </div>
            </nav>
        </div>
    </div>
    )
};
