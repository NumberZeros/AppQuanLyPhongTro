import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const name = 'Motel';

const initialState = freeze({
  data: {},
  motel: [],
  isLoading: false,
});

export default handleActions(
  {
    [actions.fetchAllMotelSuccess]: (state, action) => {
      return freeze({
        ...state,
        motel: action.payload,
      });
    },
    [actions.fetchAllMotel]: (state, action) => {
      return freeze({
        ...state,
        isLoading: !state.isLoading,
      });
    },
  },
  initialState,
);
