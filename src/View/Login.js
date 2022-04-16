import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useFormReact } from '../hooks/useFormReact';
import validator from 'validator';

import { InputLogin } from '../Components/Input';
import { LabelLogin } from '../Components/Label';
import { ButtonLogin } from '../Components/Button';

import fondoLogin from '../Img/fondoLogin.jpg'
import user from '../Img/user.png'

import { removeError, setError } from '../Redux/Actions/uiActions';
import { startLogin } from '../Redux/Actions/authActions';
import { Spinner } from '../Components/Spinner';

export const Login = () => {

    //Hooks y Helpers
    const dispatch = useDispatch()

    //Estado del error de validación de campo
    const { msgError, loading } = useSelector( state => state.ui );

    //Hooks Datos del formulario
    const [ formValues, handleInputChange ] = useFormReact({
        email: '',
        password: '',
    })
    const { email, password } = formValues

    //Manejador de Login
    const handleLogin = (e) => {
        e.preventDefault()

        if( email === "" || password === ""){
            dispatch ( setError('Todos los campos son Requeridos.') )
            return
        }
        if( !validator.isEmail( email ) ){
            dispatch ( setError('El correo debe de ser válido.') )
            return
        }
        if( password.length < 5){
            dispatch ( setError('La contraseña debe de tener más de 5 items.') )
            return
        }

        dispatch( removeError() )

        dispatch( startLogin(email, password) )
    }

  return (
    <>
        <div className="container-primary">

            { loading && (<Spinner />) }   
            
            <div className="box-background-login">
                <img className="background-img" src={ fondoLogin } alt="fondo"/>
            </div>


            <div className="container-login">

                <div align="center" className="box-img-login">
                    <img className="img-login" src={ user } alt="logo"/>
                </div>
                
                <div className="box-login">

                    <form onSubmit={ handleLogin } className="formulario-login">

                        <div className="box-users-login">

                            <LabelLogin
                                className="label-login-users"
                            >
                                Usuario
                            </LabelLogin>

                            <InputLogin 
                                type="text" 
                                name="email"
                                autoComplete="off"
                                value={ email }
                                onChange={ handleInputChange }
                            />
                            <FontAwesomeIcon className="iconUser" icon={ faUser } /> 
                        </div>



                        <div className="box-password-login">

                            <LabelLogin
                                className="label-login-password"
                            >
                                Contraseña
                            </LabelLogin>

                            <InputLogin 
                                type="password"
                                name="password" 
                                autoComplete="off"
                                value={ password }
                                onChange={ handleInputChange }
                            />
                            <FontAwesomeIcon className="iconPass" icon={ faLock } /> 
                        </div>

                        {
                            msgError && (
                                <div className='valid-register'>
                                    <p>{ msgError }</p>
                                </div>
                            )
                        }

                        <ButtonLogin>Ingresar</ButtonLogin>

                    </form>

                </div>
            </div>
        </div>

    </>
  )
}
