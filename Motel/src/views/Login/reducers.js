import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const name = 'Login';

const initialState = freeze({
  data: {},
});

export default handleActions(
  {
    [actions.loginSuccess]: (state, action) => {
      return freeze({
        ...state,
        data: action.payload,
      });
    },
  },
  initialState,
);
