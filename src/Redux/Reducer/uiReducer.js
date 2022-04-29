import { types } from "../../Types/types";


const initialState = {
    loading: false,
    msgError: null,
    checkingLog: false,
    ModalRegisterShift: false
}


export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiSetError:
            return{
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:
            return{
                ...state,
                msgError: null
            }

        case types.uiStartSpinner:
            return{
                ...state,
                loading: action.payload
            }

        case types.checkingLog:
            return {
                ...state,
                checkingLog: action.payload
            }

        case types.uiActiveModalRegisterShift:
            return {
                ...state,
                ModalRegisterShift: action.payload,
            };
            
        default:
            return state;
    }
}