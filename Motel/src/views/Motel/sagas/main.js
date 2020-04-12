import {call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as API from '../../../apis/login';
import {takeAction} from '../../../services/forkActionSagas';

export function* handleLogin(action) {
  try {
    let res = yield call(API.login, action.payload);
    yield put(actions.loginSuccess(res));
  } catch (err) {
    console.log(err);
  }
}
//////////////////////////////////////////////////////////////////////////////

export function* login() {
  yield takeAction(actions.login, handleLogin);
}
//////////////////////////////////////////////////////////////////////////////

export default [login];
