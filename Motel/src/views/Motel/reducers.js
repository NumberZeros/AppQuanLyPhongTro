import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const name = 'Motel';

const initialState = freeze({
  data: {},
  motels: [],
  isLoading: false,
  isMotel: false,
  isCreate: false,
});

export default handleActions(
  {
    [actions.fetchAllMotelSuccess]: (state, action) => {
      console.log("lol")
      return freeze({
        ...state,
        isLoading: false,
        motels: action.payload.data,
      });
    },
    [actions.clear]: (state, action) => {
      return freeze({
        ...state,
        motels: [],
      });
    },
  },
  initialState,
);
