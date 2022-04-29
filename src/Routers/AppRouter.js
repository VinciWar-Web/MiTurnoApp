import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter, 
    Route,
    Routes, 
} from "react-router-dom";

import { Login } from "../View/Login";
import { RegisterUser } from "../View/RegisterUser";
import { Home } from "../View/Home";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { checkingLog } from "../Redux/Actions/uiActions";
import { login } from "../Redux/Actions/authActions";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "../Firebase/firebase-config";
const auth = getAuth(firebaseApp)

export const AppRouter = () => {
    
    const dispatch = useDispatch();

    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    //Sostiene la autenticación
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user?.uid){
                dispatch( login(user.uid, user.displayName) )
                dispatch( checkingLog(true) )
            } else {
                dispatch( checkingLog(false) )
            }
        })
    }, [ dispatch ])

    
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/login" element={
                        <PublicRoute >
                            <Login />
                        </PublicRoute>
                    } />

                    <Route path="/register-user" element={
                        <PublicRoute >
                            <RegisterUser />
                        </PublicRoute>
                    } />

                    <Route path="/*" element={
                        <PrivateRoute >
                            <Home />
                        </PrivateRoute>
                    } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
  