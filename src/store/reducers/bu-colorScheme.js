import {handleActions} from 'redux-actions';
import Immutable, { Map, List, fromJS } from 'immutable';

import * as colorScheme from '../actions/colorScheme';

//import defaultUsingColorScheme from '../../styles/defaultUsingColorScheme'





const stateInitial = Map({
  listColorScheme: List([])
});





const colorSchemeReducer = handleActions({
  
  
  
  [colorScheme.GET_LIST_COLOR_SCHEME]: (state, action) => {
    return state;
  },

  
  
  [colorScheme.REPLACE_COLOR_SCHEME]: (state, action) => {
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


export default colorSchemeReducer;