import {call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as API from '../../../apis/motel';
import {takeAction} from '../../../services/forkActionSagas';

export function* handlefetchAllMotel(action) {
  try {
    let res = yield call(API.fetchAllMotel, action.payload);
    yield put(actions.fetchAllMotelSuccess(res));
  } catch (err) {
    console.log(err);
  }
}
//////////////////////////////////////////////////////////////////////////////

export function* fetchAllMotel() {
  yield takeAction(actions.fetchAllMotel, handlefetchAllMotel);
}
//////////////////////////////////////////////////////////////////////////////

export default [fetchAllMotel];
