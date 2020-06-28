import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const name = 'Login';
import {isEmpty} from 'lodash';

const initialState = freeze({
  data: {},
  isLoading: false,
  isLogin: false,
  isCreate: false,
});

export default handleActions(
  {
    [actions.loginSuccess]: (state, action) => {
      if (isEmpty(action.payload)) {
        return freeze({
          ...state,
          isLoading: false,
          isLogin: false,
        });
      } else {
        return freeze({
          ...state,
          isLoading: false,
          data: action.payload.data,
          isLogin: true,
        });
      }
    },
    [actions.login]: (state, action) => {
      return freeze({
        ...state,
        isLoading: true,
        data: action.payload.data,
        isLogin: !state.isLogin,
      });
    },
    [actions.editAcountSuccess]: (state, action) => {
      return freeze({
        ...state,
        isLoading: false,
        data: action.payload.data,
      });
    },
    [actions.handleInputChange]: (state, action) => {
      const event = action.payload;
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      return freeze({
        ...state,
        message: initialState.message,
        data: {
          ...state.data,
          [name]: value,
        },
      });
    },
  },
  initialState,
);
