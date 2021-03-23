import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import css from './Auth.module.scss'
import {signUpByEmail, signInByEmail} from '../../store/auth/actions'
export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()


    function clearForm(){
        setEmail('');
        setPassword('');
        
    }
    function signUpHandler(e){
        e.preventDefault();
        dispatch(signUpByEmail(email, password));
        clearForm();
    }
    function signInHandler(e){
        e.preventDefault();
        dispatch(signInByEmail(email, password));
        clearForm();
    }
    
    return(
        <form className = {css.form} action="">
            <h1>Sign Up or Sign In</h1>
            <label htmlFor="auth-email">Email</label>
            <input
            value = {email} 
            type="email" 
            name='email' 
            id='auth-email' 
            onChange = {e=>setEmail(e.target.value)} 
            required = {true} 
            placeholder= 'Email'/>
            <label htmlFor="auth-name">Password</label>
            <input
            value = {password} 
            type="password" 
            name='name' 
            id='auth-name' 
            onChange = {e=>setPassword(e.target.value)} 
            required = {true} 
            minLength = {6} 
            placeholder= 'Password'/>
            <div className={css.buttons}>
                <button onClick = {signInHandler}>Sign In</button>
                <button onClick = {signUpHandler}>Sign Up</button>
            </div>
        </form>
    )
};
