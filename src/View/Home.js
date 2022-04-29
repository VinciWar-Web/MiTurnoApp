import { useDispatch, useSelector } from 'react-redux';
import { starLogout } from '../Redux/Actions/authActions';
import { removeError, startSpinner } from '../Redux/Actions/uiActions';
// import moment from "moment";
// import "moment/locale/es-do";

import { RegisterShift } from '../Components/RegisterAdd/RegisterShift';
import ShiftList from '../Components/ToList/ShiftList';
import { Nav } from '../Components/NavigationBar/Nav';

export const Home = () => {

  //Helpers
  const dispatch = useDispatch();

  //Estado del error de validación de campo
  const { ModalRegisterShift } = useSelector( state => state.ui );

  // const horaActual = moment(new Date()).format("h:mm:ss");
  
  return (
    <>
      <div>
        <Nav />
      </div>

      <div className="container-home">
        { ModalRegisterShift && <RegisterShift /> }
        <ShiftList />
      </div>
    </>
  )
}
