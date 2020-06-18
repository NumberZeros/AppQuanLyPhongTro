import {call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as API from '../../../apis/login';
import {takeAction} from '../../../services/forkActionSagas';

export function* handleLogin(action) {
  try {
    let res = yield call(API.login, action.payload.data);
    yield put(actions.loginSuccess(res));
  } catch (err) {
    console.log(err);
  }
}

export function* handleeditAcount(action) {
  try {
    let res = yield call(API.editAcount, action.payload.data);
    yield put(actions.editAcountSuccess(res));
  } catch (err) {
    console.log(err);
  }
}
//////////////////////////////////////////////////////////////////////////////

export function* login() {
  yield takeAction(actions.login, handleLogin);
}

export function* editAcount() {
  yield takeAction(actions.editAcount, handleeditAcount);
}
//////////////////////////////////////////////////////////////////////////////

export default [login, editAcount];
