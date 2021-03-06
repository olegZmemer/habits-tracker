import {
    auth
} from '../../firebase'
import {
    LOGOUT,
    SIGNIN_SUCCESS
} from '../actionTypes';
import {
    createUser
} from '../../api/api'

export function signUpByEmail(email, password) {
    return dispatch => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                createUser(user.uid)
                dispatch(signInByEmail(email, password));

            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });
    }
}

export function signInByEmail(email, password, uid) {
    return dispatch => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const storage = window.localStorage;
                storage.setItem('uid', userCredential.user.uid);
                dispatch(signInSuccess(userCredential.user.uid));
                
            })
            .catch((error) => {
                // const errorCode = error.code
                // const errorMessage = error.message
            });
    }
}

export function signInSuccess(uid) {
    return {
        type: SIGNIN_SUCCESS,
        payload: uid
    }
}
export function logout() {
    window.localStorage.setItem('uid', '');
    window.localStorage.setItem('expirationDate', '');
    window.localStorage.setItem('token', '');
    auth.signOut();
    return {
        type: LOGOUT
    }
}