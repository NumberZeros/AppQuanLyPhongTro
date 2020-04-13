import {createAction} from 'redux-actions';

export const hanldeInputChange = createAction('MOTEL/HANDLE_INPUT_CHANGE');
export const handleLogin = createAction('MOTEL/HANDLE_LOGIN');
export const handleCreate = createAction('MOTEL/HANDLE_CREATE');

export const fetchAllMotel = createAction('MOTEL/FETCH_ALL_MOTEL');
export const fetchAllMotelSuccess = createAction('MOTEL/FETCH_ALL_MOTEL_SUCCESS');
