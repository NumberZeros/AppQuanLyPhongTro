import {createAction} from 'redux-actions';

///customers
export const fetchAllCustomers = createAction('CUSTOMERS/FETCH_ALL_CUSTOMERS');
export const fetchAllCustomersSuccess = createAction('CUSTOMERS/FETCH_ALL_CUSTOMERS_SUCCESS');

//contact
export const fetchAllContacts = createAction('CUSTOMERS/FETCH_ALL_CONTACTS');
export const fetchAllContactsSuccess = createAction('CUSTOMERS/FETCH_ALL_CONTACTS_SUCCESS');

///other
export const onChangeTab = createAction('CUSTOMERS/CHANGE_TAB');