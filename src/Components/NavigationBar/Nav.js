import { useDispatch, useSelector } from 'react-redux';
import { starLogout } from '../../Redux/Actions/authActions';
import { removeError, startSpinner } from '../../Redux/Actions/uiActions';

import logout from '../../Img/logout.png'

export const Nav = () => {

    //Helpers
    const dispatch = useDispatch();

    //Estado del error de validación de campo
    const { name } = useSelector( state => state.auth );

    //Manejador de Logout
    const handleLogout = () => {
        dispatch( removeError() ) //Remueve Errores de autenticación
        dispatch( startSpinner(true) ) //Activa el Spinner
        dispatch(starLogout()) //Inicia el logout
    }

  return (
    <>
        <div className="container-nav">
            <div className='box-name-welcome'>
            <p>Bienvenido(a)</p>
            <p className='name-welcome'>{name}</p>
            </div>

            <div onClick={handleLogout} className='box-logout'>
            <img src={ logout } alt={ logout } />
            </div>
        </div>
    </>
  )
}
