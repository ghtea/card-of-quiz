import {handleActions} from 'redux-actions';

import * as palette from '../actions/palette';

import defaultUsingPalette from '../../styles/defaultUsingPalette'
// import {CALL_DATA, CALL_DATA_SUCCESS, CALL_DATA_FAIL} from '../actions/palette'







const stateInitial = {
  listPalette: []
};





const paletteReducer = handleActions({
  
  
  
  
  
  [palette.GET_LIST_PALETTE]: (state, action) => {
    return {...state};
  },

  [palette.GET_LIST_PALETTE_SUCCESS]: (state, action) => {
    state['listPalette'] = action['payload'];
    return {...state};
  },
  
  [palette.GET_LIST_PALETTE_FAILURE]: (state, action) => {
    return {...state};
  },
  
  
  [palette.REPLACE_PALETTE]: (state, action) => {
    return {...state};
  },
  
  
  
  // handleActions
  [palette.REPLACE_PALETTE]: (state, action) => {
    console.log('hiiii');
    
    console.log(action);
    const location = action['payload']['location'] || [];
    
    if (!location || location.length === 0) {
      // do nothing
    }
    else if (location.length === 1) {
      state[ location[0] ] = action['payload']['replacement'];
    }
    else if (location.length === 2) {
      state[ location[0] ][ location[1] ] = action['payload']['replacement'];
    }
    else if (location.length === 3) {
      state[ location[0] ][ location[1] ][ location[2] ] = action['payload']['replacement'];
    }
    
    return {...state};
  },
  
  
}, stateInitial);


export default paletteReducer;