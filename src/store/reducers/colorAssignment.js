import {handleActions} from 'redux-actions';
import Immutable, { Map, List, fromJS } from 'immutable';

import * as colorAssignment from '../actions/colorAssignment';

//import defaultUsingColorAssignment from '../../styles/defaultUsingColorAssignment'





const stateInitial = Map({
  listColorAssignment: List([])
});





const colorAssignmentReducer = handleActions({
  
  
  
  [colorAssignment.GET_LIST_COLOR_ASSIGNMENT]: (state, action) => {
    return state;
  },

  
  
  [colorAssignment.REPLACE_COLOR_ASSIGNMENT]: (state, action) => {
    console.log('hiiii');
    
    const location = action['payload']['location'] || [];
    
    if (!location || location.length === 0) {
      return state;
    }
    else {
      return state.setIn(location, Immutable.fromJS(action['payload']['replacement']) );
    }
    
  },
  
  
}, stateInitial);


export default colorAssignmentReducer;