import {call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as API from '../../../apis/home';
import {takeAction} from '../../../services/forkActionSagas';

export function* handlefetchAllPayment(action) {
  try {
    let res = yield call(API.fetchAllPayment, action.payload);
    yield put(actions.fetchAllPaymentSuccess(res));
  } catch (err) {
    console.log(err);
  }
}
export function* handlefetchAllReceipt(action) {
  try {
    let res = yield call(API.fetchAllReceipt, action.payload);
    yield put(actions.fetchAllReceiptSuccess(res));
  } catch (err) {
    console.log(err);
  }
}

export function* handlefetchAllMotels(action) {
  try {
    let res = yield call(API.fetchAllMotels, action.payload);
    yield put(actions.fetchAllMotelsSuccess(res));
  } catch (err) {
    console.log(err);
  }
}
//////////////////////////////////////////////////////////////////////////////

export function* fetchAllPayment() {
  yield takeAction(actions.fetchAllPayment, handlefetchAllPayment);
}
export function* fetchAllReceipt() {
  yield takeAction(actions.fetchAllReceipt, handlefetchAllReceipt);
}
export function* fetchAllMotels() {
  yield takeAction(actions.fetchAllMotels, handlefetchAllMotels);
}
//////////////////////////////////////////////////////////////////////////////

export default [fetchAllPayment, fetchAllReceipt, fetchAllMotels];
