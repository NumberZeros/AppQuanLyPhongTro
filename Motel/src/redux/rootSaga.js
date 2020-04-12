import {all} from 'redux-saga/effects';
import {sagas as Login} from '../views/Login';

const rootSaga = function*() {
  yield all([Login()]);
};
export default rootSaga;
