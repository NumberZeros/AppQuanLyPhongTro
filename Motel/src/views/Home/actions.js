import {createAction} from 'redux-actions';

///fetchAllPayment
export const fetchAllPayment = createAction('HOME/FETCH_ALL_PAYMENT');
export const fetchAllPaymentSuccess = createAction('HOME/FETCH_ALL_PAYMENT_SUCCESS');

//contact
export const fetchAllReceipt = createAction('HOME/FETCH_ALL_Receipt');
export const fetchAllReceiptSuccess = createAction('HOME/FETCH_ALL_Receipt_SUCCESS');

//contact
export const fetchAllMotels = createAction('HOME/FETCH_ALL_Motel');
export const fetchAllMotelsSuccess = createAction('HOME/FETCH_ALL_Motel_SUCCESS');

///other
export const onChangeTab = createAction('HOME/CHANGE_TAB');