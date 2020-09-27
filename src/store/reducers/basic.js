import {handleActions} from 'redux-actions';
import Immutable, { Map, List, fromJS } from 'immutable';

import * as basic from '../actions/basic';

//import defaultUsingColorAssignment from '../../styles/defaultUsingColorAssignment'





const stateInitial = fromJS({
  loading: {
    listCardQuizFocused: false,
    listCardRewardFocused: false
  },
  ready: {
    listCardQuizFocused: false,
    listCardRewardFocused: false
  }  
});





const basicReducer = handleActions({
  
  
  [basic.REPLACE_BASIC]: (state, action) => {
    //console.log('hiiii');
    
    const location = action['payload']['location'] || [];
    
    if (!location || location.length === 0) {
      return state;
    }
    else {
      return state.setIn(location, Immutable.fromJS(action['payload']['replacement']) );
    }
    
  },
  
  
}, stateInitial);


export default basicReducer;