import {combineReducers} from 'redux';


import colorSchemeReducer from './reducers/colorScheme';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
  colorScheme: colorSchemeReducer,
  theme: themeReducer
});



export default rootReducer;