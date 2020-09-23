import {handleActions} from 'redux-actions';
import Immutable, { Map, List, fromJS } from 'immutable';

import * as color from '../actions/color';

import colorDefault from './color/colorDefault'
// import {CALL_DATA, CALL_DATA_SUCCESS, CALL_DATA_FAIL} from '../actions/theme'







const stateInitial = fromJS({
  basic: {
    background: colorDefault,
    text: colorDefault,
    shape: colorDefault
  }
});




const colorReducer = handleActions({
    
  [color.REPLACE_COLOR]: (state, action) => {

    const location = action['payload']['location'] || [];
    
    if (!location || location.length === 0) {
      return state;
    }
    else {
      return state.setIn(location, Immutable.fromJS(action['payload']['replacement']) );
    }
  },
  
  [color.SPREAD_TEXT]: (state, action) => {
    return state;
  }
  
}, stateInitial);


export default colorReducer;