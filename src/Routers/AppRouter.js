import {
    BrowserRouter, 
    Route,
    Routes, 
} from "react-router-dom";

import { Login } from "../View/Login";
import { RegisterUser } from "../View/RegisterUser";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={ <Login />} />
                    <Route exact path="/register-user" element={ <RegisterUser />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}
  