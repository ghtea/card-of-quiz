import {combineReducers} from 'redux';

import basicReducer from './reducers/basic';
import authReducer from './reducers/auth';
import cardReducer from './reducers/card';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
  basic: basicReducer,
  auth: authReducer,
  card: cardReducer,
  theme: themeReducer
});



export default rootReducer;