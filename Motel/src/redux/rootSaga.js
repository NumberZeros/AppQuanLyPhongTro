import {all} from 'redux-saga/effects';
import {sagas as Login} from '../views/Login';
import {sagas as Motel} from '../views/Motel';

export default function* rootSaga() {
  yield all([Login(), Motel()]);
}
