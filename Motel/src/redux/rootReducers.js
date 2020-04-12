import {combineReducers} from 'redux';
import Login, {name as nameLogin} from '../views/Login/reducers';
import Motel, {name as nameMotel} from '../views/Motel/reducers';

const rootReducer = combineReducers({
  [nameLogin]: Login,
  [nameMotel]: Motel,

});

export default rootReducer;
