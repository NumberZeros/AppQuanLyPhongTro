import {combineReducers} from 'redux';
import Login, {name as nameLogin} from '../views/Login/reducers';
import Motel, {name as nameMotel} from '../views/Motel/reducers';
import Customers, {name as nameCustomers} from '../views/Customer/reducers';

const reducers = {
  [nameLogin]: Login,
  [nameMotel]: Motel,
  [nameCustomers]: Customers,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
