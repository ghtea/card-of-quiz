import {combineReducers} from 'redux';


import cardReducer from './reducers/card';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
  card: cardReducer,
  theme: themeReducer
});



export default rootReducer;