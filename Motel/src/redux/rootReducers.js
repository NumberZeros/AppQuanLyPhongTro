import {combineReducers} from 'redux';
import Login, {name as nameLogin} from '../views/Login/reducers';
import Motel, {name as nameMotel} from '../views/Motel/reducers';

const reducers = {
  [nameLogin]: Login,
  [nameMotel]: Motel,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
