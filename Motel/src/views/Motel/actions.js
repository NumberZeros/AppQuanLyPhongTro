import {createAction} from 'redux-actions';

export const hanldeInputChange = createAction('MOTEL/HANDLE_INPUT_CHANGE');
export const hanldeSearchChange = createAction('MOTEL/HANDLE_SEARCH_CHANGE');

export const clear = createAction('MOTEL/CLEAR');
export const handleCreate = createAction('MOTEL/HANDLE_CREATE');

export const fetchAllMotel = createAction('MOTEL/FETCH_ALL_MOTEL');
export const fetchAllMotelSuccess = createAction('MOTEL/FETCH_ALL_MOTEL_SUCCESS');
