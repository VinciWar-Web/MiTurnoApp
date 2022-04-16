import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter, 
    Route,
    Routes, 
} from "react-router-dom";

import { Login } from "../View/Login";
import { RegisterUser } from "../View/RegisterUser";
import { login } from "../Redux/Actions/authActions";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "../Firebase/firebase-config";
import { Home } from "../View/Home";
const auth = getAuth(firebaseApp)

export const AppRouter = () => {
    
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    //Sostiene la autenticación
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user?.uid){
                dispatch( login(user.uid, user.displayName) )
                setIsLoggedIn(true)
            }
            setChecking(false)
        })
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if( checking ){
        return (
            <h1>Espere...</h1>
        )
    }
    
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={ <Login />} />
                    <Route exact path="/register-user" element={ <RegisterUser />} />
                    <Route exact path="/home" element={ <Home />} />


                </Routes>
            </div>
        </BrowserRouter>
    )
}
  