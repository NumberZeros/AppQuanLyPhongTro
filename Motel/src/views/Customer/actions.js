import {createAction} from 'redux-actions';

///customers
export const fetchAllCustomers = createAction('CUSTOMERS/FETCH_ALL_CUSTOMERS');
export const fetchAllCustomersSuccess = createAction('CUSTOMERS/FETCH_ALL_CUSTOMERS_SUCCESS');

//contact
export const fetchAllContacts = createAction('CUSTOMERS/FETCH_ALL_CONTACTS');
export const fetchAllContactsSuccess = createAction('CUSTOMERS/FETCH_ALL_CONTACTS_SUCCESS');

//contact
export const fetchAllMotels = createAction('CUSTOMERS/FETCH_ALL_Motel');
export const fetchAllMotelsSuccess = createAction('CUSTOMERS/FETCH_ALL_Motel_SUCCESS');

///other
export const onChangeTab = createAction('CUSTOMERS/CHANGE_TAB');

export const clear = createAction('CUSTOMERS/CLEAR');