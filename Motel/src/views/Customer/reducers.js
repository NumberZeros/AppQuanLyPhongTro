import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const name = 'Customers';

const initialState = freeze({
  data: {},
  isloading: false,
  customers: [],
  contacts: [],
  motels:[],
  tabs: 'customers',
});

export default handleActions(
  {
    [actions.fetchAllCustomers]: (state, action) => {
      return freeze({
        ...state,
        isloading: true,
      });
    },
    [actions.fetchAllCustomersSuccess]: (state, action) => {
      return freeze({
        ...state,
        isloading: false,
        customers: action.payload.data,
      });
    },
    [actions.fetchAllContactsSuccess]: (state, action) => {
      return freeze({
        ...state,
        isloading: false,
        contacts: action.payload.data,
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
