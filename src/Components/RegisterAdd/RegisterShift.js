import { useDispatch } from "react-redux";
import { ModalRegisterShift } from "../../Redux/Actions/uiActions";
import { ButtonLogin } from "../Button"
import { InputLogin } from "../Input"
import { LabelLogin } from "../Label"
import { Select } from "../Select";

export const RegisterShift = () => {

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Clic')
  }

  const handleCloseModal = () => {
    dispatch(ModalRegisterShift(false))
  }


  return (
    <>
      <div className="container-register-shift">
        <div className="box-register-shift">

            <form onSubmit={ handleLogin } className="formulario-login">

            <div className="close-modal"><p className="x" onClick={handleCloseModal}>x</p></div>
            <div className="title-shift">
                <h2>Registra tu Turno</h2>
            </div>

                <div className="box-register1">
                    <LabelLogin
                        className="label-register"
                    >
                        Nombre y Apellido
                    </LabelLogin>

                    <InputLogin 
                        type="text"
                        name="nombre" 
                        autoComplete="off"
                        // value={ nombre }
                        // onChange={ handleInputChange }
                    />
                </div>

                <div className="box-register1">
                    <LabelLogin
                        className="label-register"
                    >
                        Especialidad
                    </LabelLogin>

                    <Select
                      type="text" 
                      name="email"
                      autoComplete="off"
                      // value={ email }
                      // onChange={ handleInputChange }
                    >
                      <option value="">Selecciona una especialidad</option>
                      <option value="General">General</option>
                      <option value="Traumatologia">Traumatologia</option>
                      <option value="Reumatologia">Reumatologia</option>
                      <option value="Pediatra">Pediatra</option>
                      <option value="Pediatria">Pediatria</option>
                      <option value="Ginecologia">Ginecologia</option>
                      <option value="Neurologia">Neurologia</option>


                    </Select>

                </div>
                <ButtonLogin>Registrar Turno</ButtonLogin>
            </form>
        </div>
      </div>
    </>
  )
}
