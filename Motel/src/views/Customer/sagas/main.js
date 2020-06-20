import {call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as API from '../../../apis/customer';
import {takeAction} from '../../../services/forkActionSagas';

export function* handlefetchAllCustomers(action) {
  try {
    let res = yield call(API.fetchAllCustomers, action.payload);
    yield put(actions.fetchAllCustomersSuccess(res));
  } catch (err) {
    console.log(err);
  }
}
export function* handlefetchAllContacts(action) {
  try {
    let res = yield call(API.fetchAllContacts, action.payload);
    yield put(actions.fetchAllContactsSuccess(res));
  } catch (err) {
    console.log(err);
  }
}
//////////////////////////////////////////////////////////////////////////////

export function* fetchAllCustomers() {
  yield takeAction(actions.fetchAllCustomers, handlefetchAllCustomers);
}
export function* fetchAllContacts() {
  yield takeAction(actions.fetchAllContacts, handlefetchAllContacts);
}
//////////////////////////////////////////////////////////////////////////////

export default [fetchAllCustomers, fetchAllContacts];
