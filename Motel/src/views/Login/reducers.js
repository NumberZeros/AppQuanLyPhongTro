import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const name = 'Login';

const initialState = freeze({
  data: {},
  isLoading: false,
  isLogin: false,
  isCreate: false,
});

export default handleActions(
  {
    [actions.loginSuccess]: (state, action) => {
      return freeze({
        ...state,
        isLoading: false,
        data: action.payload,
      });
    },
    [actions.login]: (state, action) => {
      return freeze({
        ...state,
        isLoading: true,
        data: action.payload,
      });
    },
    [actions.handleLogin]: (state, action) => {
      return freeze({
        ...state,
        isLogin: !state.isLogin,
      });
    },
    [actions.handleCreate]: (state, action) => {
      return freeze({
        ...state,
        isCreate: !state.isCreate,
      });
    },
  },
  initialState,
);
