import {combineReducers} from 'redux';


import colorAssignmentReducer from './reducers/colorAssignment';
import colorReducer from './reducers/color';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
  colorAssignment: colorAssignmentReducer,
  color: colorReducer,
  theme: themeReducer
});



export default rootReducer;