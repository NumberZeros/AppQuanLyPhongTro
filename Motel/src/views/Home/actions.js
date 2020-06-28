import {createAction} from 'redux-actions';

///fetchAllPayment
export const fetchAllPayment = createAction('HOME/FETCH_ALL_PAYMENT');
export const fetchAllPaymentSuccess = createAction('HOME/FETCH_ALL_PAYMENT_SUCCESS');

//contact
export const fetchAllContacts = createAction('HOME/FETCH_ALL_CONTACTS');
export const fetchAllContactsSuccess = createAction('HOME/FETCH_ALL_CONTACTS_SUCCESS');

//contact
export const fetchAllMotels = createAction('HOME/FETCH_ALL_Motel');
export const fetchAllMotelsSuccess = createAction('HOME/FETCH_ALL_Motel_SUCCESS');

///other
export const onChangeTab = createAction('HOME/CHANGE_TAB');