import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

    const { checkingLog } = useSelector( state => state.ui );

    return checkingLog
        ? children
        : <Navigate to="/login" />
}
