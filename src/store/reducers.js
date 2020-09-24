import {combineReducers} from 'redux';


import koreanReducer from './reducers/korean';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
  korean: koreanReducer,
  theme: themeReducer
});



export default rootReducer;