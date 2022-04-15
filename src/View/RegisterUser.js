import { useDispatch } from 'react-redux';
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

export const RegisterUser = () => {

    //Hooks y Helpers
    const dispatch = useDispatch()

    const [validRegister, setValidRegister] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [minimunPassword, setMinimunPassword] = useState(false)

    const [showEyePassword, setShowEyePassword] = useState(false)
    const [showEyePassword2, setShowEyePassword2] = useState(false)


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
        contraseña: '',
        contraseña2: '',
    })
    const { nombre, email, contraseña, contraseña2 } = formValues

    //Enviamos la información
    const handleLogin = (e) => {
        e.preventDefault()

        if( nombre === "" || email === "" || contraseña === "" || contraseña2 === "" ){
            setValidRegister(true)
            return
        }

        if( !validator.isEmail( email ) ){
            setValidEmail(true)
            return
        }

        if( contraseña !== contraseña2 ){
            setValidPassword(true)
            return
        }

        if( contraseña.length < 5){
            setMinimunPassword(true)
            return
        }

        setValidRegister(false)
        setValidEmail(false)
        setValidPassword(false)
        setMinimunPassword(false)


        // dispatch( startLogin(email, password) )

        console.log(formValues)
    }

  return (
    <>
        <div className="container-primary">

            <div className="box-background-login">
                <img className="background-img" src={ fondoLogin } alt="fondo"/>
            </div>


            <div className="container-login">

                <div align="center" className="box-img-login">
                    <img className="img-login" src={ user } alt="logo"/>
                </div>
                
                <div className="box-login">

                    <form onSubmit={ handleLogin } className="formulario-login">

                        <div className="box-register">
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

                        <div className="box-register">
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
                                name="contraseña"
                                autoComplete="off"
                                value={ contraseña }
                                onChange={ handleInputChange }
                            />
                            <span onClick={ handleShowPassword }>
                                {showEyePassword
                                    ? 
                                        <FontAwesomeIcon className="iconPassEye" icon={ faEye } /> 
                                    : 
                                        <FontAwesomeIcon className="iconPassEye" icon={ faEyeSlash } /> 
                                }
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
                                name="contraseña2"
                                autoComplete="off"
                                value={ contraseña2 }
                                onChange={ handleInputChange }
                            />

                            <span onClick={ handleShowPassword2 }>
                                {showEyePassword2 
                                    ? 
                                        <FontAwesomeIcon className="iconPassEye2" icon={ faEye } /> 
                                    : 
                                        <FontAwesomeIcon className="iconPassEye2" icon={ faEyeSlash } /> 
                                }
                            </span>

                        </div>

                        {
                            validRegister && (
                                <div className='valid-register'>
                                    <p>Todos los campos son Requeridos.</p>
                                </div>
                            )
                        }

                        {
                            validEmail && (
                                <div className='valid-register'>
                                    <p>El correo debe de ser válido.</p>
                                </div>
                            )
                        }

                        {
                            validPassword && (
                                <div className='valid-register'>
                                    <p>Las contraseñas deben de ser iguales.</p>
                                </div>
                            )
                        }

                        {
                            minimunPassword && (
                                <div className='valid-register'>
                                    <p>La contraseña debe de tener más de 5 items.</p>
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
