import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const name = 'Home';

const initialState = freeze({
  data: {},
  isloading: false,
  payment: [],
  receipt: [],
  motels:[],
  tabs: 'Payments',
});

export default handleActions(
  {
    [actions.fetchAllPayment]: (state, action) => {
      return freeze({
        ...state,
        isloading: true,
      });
    },
    [actions.fetchAllPaymentSuccess]: (state, action) => {
      return freeze({
        ...state,
        isloading: false,
        payment: action.payload.data,
      });
    },
    [actions.fetchAllReceiptSuccess]: (state, action) => {
      return freeze({
        ...state,
        isloading: false,
        receipt: action.payload.data,
      });
    },
    [actions.fetchAllMotelsSuccess]: (state, action) => {
      return freeze({
        ...state,
        isloading: false,
        motels: action.payload.data,
      });
    },
    [actions.onChangeTab]: (state, action) => {
      return freeze({
        ...state,
        tabs: action.payload.value,
      });
    },
  },
  initialState,
);
