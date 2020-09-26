import {handleActions} from 'redux-actions';
import Immutable, { Map, List, fromJS } from 'immutable';

import * as korean from '../actions/korean';

//import defaultUsingColorAssignment from '../../styles/defaultUsingColorAssignment'





const stateInitial = fromJS({
  listCardFocused: []
});





const koreanReducer = handleActions({
  
  
  
  [korean.GET_LIST_CARD_KOREAN]: (state, action) => {
    return state;
  },

  
  
  [korean.REPLACE_KOREAN]: (state, action) => {
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


export default koreanReducer;