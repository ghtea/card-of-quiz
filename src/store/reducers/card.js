import {handleActions} from 'redux-actions';
import Immutable, { Map, List, fromJS } from 'immutable';

import * as card from '../actions/card';

//import defaultUsingColorAssignment from '../../styles/defaultUsingColorAssignment'





const stateInitial = fromJS({
  
  listCard: [], // list of Card (Quiz + Reward)
  
  indexCardFocused: 0
  
});





const cardReducer = handleActions({
  
  [card.REPLACE_CARD]: (state, action) => {
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


export default cardReducer;