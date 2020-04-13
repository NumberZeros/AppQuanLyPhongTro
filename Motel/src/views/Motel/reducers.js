import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const name = 'Motel';

const initialState = freeze({
  data: {},
  motel: [],
  isLoading: false,
  isMotel: false,
  isCreate: false,
});

export default handleActions(
  {
    [actions.fetchAllMotelSuccess]: (state, action) => {
      console.log('reducer', action);
      return freeze({
        ...state,
        isLoading: false,
        motel: action.payload,
      });
    },
    [actions.FetchAllMotel]: (state, action) => {
      return freeze({
        ...state,
        isLoading: true,
      });
    },
    [actions.handleMotel]: (state, action) => {
      return freeze({
        ...state,
        isMotel: !state.isMotel,
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
