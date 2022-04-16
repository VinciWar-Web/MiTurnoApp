import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import validator from 'validator';

import { InputLogin } from '../Components/Input';
import { LabelLogin } from '../Components/Label';
import { ButtonLogin } from '../Components/Button';
import { useFormReact } from '../hooks/useFormReact';

import fondoLogin from '../Img/fondoLogin.jpg';
import user from '../Img/userRegister.png';

import { removeError, setError } from '../Redux/Actions/uiActions';
import { startRegisterUser } from '../Redux/Actions/authActions';
import { Spinner } from '../Components/Spinner';

export const RegisterUser = () => {

    //Hooks y Helpers
    const dispatch = useDispatch()

    //Estado del error de validación de campo
    const { msgError, loading } = useSelector( state => state.ui );

    //Hooks
    const [showEyePassword, setShowEyePassword] = useState(false)
    const [showEyePassword2, setShowEyePassword2] = useState(false)


    //Manejadores de eventos de ver contraseña
    const handleShowPassword = () => {
        setShowEyePassword(!showEyePassword)
    }
    const handleShowPassword2 = () => {
        setShowEyePassword2(!showEyePassword2)
    }

    //Hooks Datos del formulario
    const [ formValues, handleInputChange ] = useFormReact({
        nombre: '',
        email: '',
        password: '',
        password2: '',
    })
    const { nombre, email, password, password2 } = formValues

    //Enviamos la información
    const handleLogin = (e) => {
        e.preventDefault()

        if( nombre === "" || email === "" || password === "" || password2 === "" ){
            dispatch ( setError('Todos los campos son Requeridos.') )
            return
        }
        if( !validator.isEmail( email ) ){
            dispatch ( setError('El correo debe de ser válido.') )
            return
        }
        if( password !== password2 ){
            dispatch ( setError('Las contraseñas deben de ser iguales.') )
            return
        }
        if( password.length < 5){
            dispatch ( setError('La contraseña debe de tener más de 5 items.') )
            return
        }

        dispatch( removeError() )

        dispatch( startRegisterUser(nombre, email, password) )
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

                        <div className="box-register1">
                            <LabelLogin
                                className="label-register"
                            >
                                Nombre
                            </LabelLogin>

                            <InputLogin 
                                type="text"
                                name="nombre" 
                                autoComplete="off"
                                value={ nombre }
                                onChange={ handleInputChange }
                            />
                        </div>

                        <div className="box-register1">
                            <LabelLogin
                                className="label-register"
                            >
                                Correo
                            </LabelLogin>

                            <InputLogin 
                                type="text" 
                                name="email"
                                autoComplete="off"
                                value={ email }
                                onChange={ handleInputChange }
                            />
                        </div>

                        <div className="box-register">
                            <LabelLogin
                                className="label-register"
                            >
                                Contraseña
                            </LabelLogin>

                            <InputLogin 
                                type={showEyePassword ? "text" : "password"}
                                name="password"
                                autoComplete="off"
                                value={ password }
                                onChange={ handleInputChange }
                            />
                            <span className='iconPassEye' onClick={ handleShowPassword }>
                                {showEyePassword ? <FontAwesomeIcon icon={ faEye } /> : <FontAwesomeIcon icon={ faEyeSlash } /> }
                            </span>
                        </div>

                        <div className="box-register">
                            <LabelLogin
                                className="label-register"
                            >
                                Confirmar contraseña
                            </LabelLogin>

                            <InputLogin 
                                type={showEyePassword2 ? "text" : "password"}
                                name="password2"
                                autoComplete="off"
                                value={ password2 }
                                onChange={ handleInputChange }
                            />

                            <span className='iconPassEye2' onClick={ handleShowPassword2 }>
                                {showEyePassword2 ? <FontAwesomeIcon icon={ faEye } /> : <FontAwesomeIcon icon={ faEyeSlash } /> }
                            </span>

                        </div>

                        {
                            msgError && (
                                <div className='valid-register'>
                                    <p>{ msgError }</p>
                                </div>
                            )
                        }

                        <ButtonLogin>Registrar</ButtonLogin>

                    </form>

                </div>
            </div>
        </div>

    </>
  )
}
