import {all} from 'redux-saga/effects';
import {sagas as Login} from '../views/Login';
import {sagas as Motel} from '../views/Motel';

const rootSaga = function*() {
  yield all([Login()], Motel());
};
export default rootSaga;
