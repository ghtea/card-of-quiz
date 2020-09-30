import { call, spawn, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import * as config from '../../../config';

import * as actionsBasic from "../../actions/basic";
import * as actionsCard from "../../actions/card";
//import * as theme from "../../actions/theme";


/*

  useEffect(()=>{
    if (index===0){
      dispatch(
        actionsCard.return_GET_LIST_CARD_REWARD({
          objQuery: {
            filterKind: 'gif',
            filterTags: JSON.stringify(['love', 'cute', 'character'])
          }
        })
      );
    }
  }, [])
  
*/

// https://stackoverflow.com/questions/38605420/how-to-get-action-params-from-saga
function* submitAnswer(action) {
    try {
        
        const indexCardFocused = action['payload']['indexCardFocused'];
        const valueTrying = action['payload']['valueTrying'];
        
        const answer =  yield select( (state) => state.card.getIn(['listCard', indexCardFocused, 'quiz', 'answer']) ); 
        
        const kindAnswer = answer.getIn(['kind']);
        const valueCorrect = answer.getIn([kindAnswer,'content']);
        
        if (valueTrying === valueCorrect){
            
            console.log('answer is correct!')
            
            yield put( actionsCard.return_REPLACE_CARD({
                location: ['listCard', indexCardFocused, 'status', 'solved'],
                replacement: true
            }) );
            
            yield put( actionsCard.return_REPLACE_CARD({
                location: ['listCard', indexCardFocused, 'status', 'reward', 'showing'],
                replacement: true
            }) );
            
            
        }
        else {
            
            console.log('answer is wrong')
            
            yield put( actionsCard.return_REPLACE_CARD({
                location: ['listCard', indexCardFocused, 'status', 'solved'],
                replacement: false
            }) );
            
            yield put( actionsCard.return_REPLACE_CARD({
                location: ['listCard', indexCardFocused, 'status', 'reward', 'showing'],
                replacement: false
            }) );
            
        }
        
        
        
    } catch (error) {
        
    }
}

export default submitAnswer;


/*

        
        yield put({
            type: korean.REPLACE_COLOR_Assignment,
            payload: {
                location: ['listColorAssignment'],
                replacement: data
            }
        });
*/