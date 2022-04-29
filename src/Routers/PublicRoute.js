import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const { checkingLog } = useSelector( state => state.ui );

    return checkingLog 
        ? <Navigate to="/" />
        : children
}


