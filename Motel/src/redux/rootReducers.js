import {combineReducers} from 'redux';
import Login, {name as nameLogin} from '../views/Login/reducers';
import Motel, {name as nameMotel} from '../views/Motel/reducers';
import Customers, {name as nameCustomers} from '../views/Customer/reducers';
import Home, {name as nameHome} from '../views/Home/reducers';

const reducers = {
  [nameLogin]: Login,
  [nameHome]: Home,
  [nameMotel]: Motel,
  [nameCustomers]: Customers,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
