import {createAction} from 'redux-actions';

export const handleInputChange = createAction('LOGIN/HANDLE_INPUT_CHANGE');
export const handleLogin = createAction('LOGIN/HANDLE_LOGIN');
export const handleCreate = createAction('LOGIN/HANDLE_CREATE');

export const login = createAction('LOGIN/LOGIN');
export const loginSuccess = createAction('LOGIN/LOGIN_SUCCESS');

export const editAcount = createAction('LOGIN/EDIT_ACCOUNT');
export const editAcountSuccess = createAction('LOGIN/EDIT_ACCOUNT_SUCCESS');
