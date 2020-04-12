import {combineReducers} from 'redux';
import Login, {name as nameLogin} from '../views/Login/reducers';

const rootReducer = combineReducers({
  [nameLogin]: Login,
});

export default rootReducer;
