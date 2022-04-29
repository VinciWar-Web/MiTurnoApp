import { useDispatch } from "react-redux";
import { ModalRegisterShift } from "../../Redux/Actions/uiActions"

const ShiftList = () => {

    const dispatch = useDispatch();

    const handleModalShift = () => {
        dispatch(ModalRegisterShift(true))
    }

  return (
    <>
        <button onClick={handleModalShift}>Agregar Turno</button>
        <div>Lista de Turnos</div>
    </>
  )
}

export default ShiftList