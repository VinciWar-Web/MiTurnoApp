import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const db = firebase.firestore()

export {
    db,
    firebase
}