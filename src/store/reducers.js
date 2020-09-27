import {combineReducers} from 'redux';

import basicReducer from './reducers/basic';
import cardReducer from './reducers/card';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
  basic: basicReducer,
  card: cardReducer,
  theme: themeReducer
});



export default rootReducer;