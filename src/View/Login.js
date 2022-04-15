import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import { InputLogin } from '../Components/Input';
import { LabelLogin } from '../Components/Label';
import { ButtonLogin } from '../Components/Button';
import { useFormReact } from '../hooks/useFormReact';

import fondoLogin from '../Img/fondoLogin.jpg'
import user from '../Img/user.png'

import { startLogin } from '../Redux/Actions/authActions';

export const Login = () => {

    const dispatch = useDispatch()

    //Hooks Datos del formulario
    const [ formValues, handleInputChange ] = useFormReact({
        email: 'davinci.dv@gmail.com',
        password: '123',
    })
    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch( startLogin(email, password) )

        // console.log('Iniciando sesión ' + email + " " + password)
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

                        <ButtonLogin>Ingresar</ButtonLogin>

                    </form>

                </div>
            </div>
        </div>

    </>
  )
}
