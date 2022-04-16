// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { types } from '../../Types/types'
import { firebaseApp } from '../../Firebase/firebase-config'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { startSpinner } from './uiActions';
import { async } from '@firebase/util';

const auth = getAuth(firebaseApp)


export const startLogin = ( email, password ) => {
    return ( dispatch ) => {

        dispatch( startSpinner(true) )

        signInWithEmailAndPassword(auth, email, password )
            .then( ({user}) => { 
                dispatch(login(user.uid, user.displayName))
                dispatch( startSpinner(false) )
            })
            .catch( err => {
                console.log(err)
                dispatch( startSpinner(false) )
            })

    }
}

export const startRegisterUser = (nombre, email, password) => {
    return ( dispatch ) => {

        dispatch( startSpinner(true) )

        createUserWithEmailAndPassword(auth, email, password )
            .then( async ({user}) => { 
                await updateProfile(user, {
                    'displayName': nombre
                })
                dispatch(login(user.uid, user.displayName))
                dispatch( startSpinner(false) )
            })
            .catch( err => {
                console.log(err)
                dispatch( startSpinner(false) )
            })

    }
}

export const starLogout = () => {
    return async ( dispatch ) => {

        await signOut(auth)
        dispatch( logout() )

    }
}



export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid, 
        displayName
    }
})

export const logout = () => ({
    type: types.logout
})