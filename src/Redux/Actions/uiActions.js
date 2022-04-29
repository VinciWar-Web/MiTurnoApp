import { types } from '../../Types/types';

export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err
})

export const removeError = () => ({
    type: types.uiRemoveError
})

export const startSpinner = ( spinner ) => ({
    type: types.uiStartSpinner,
    payload: spinner
})

export const checkingLog = ( checking ) => ({
    type: types.checkingLog,
    payload: checking
})

export const ModalRegisterShift = (modal) => ({
	type: types.uiActiveModalRegisterShift,
	payload: modal,
});
