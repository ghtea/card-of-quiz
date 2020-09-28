import { call, spawn, put, takeEvery } from "redux-saga/effects";
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
        
        const indexCardQuizFocused = action['payload']['indexCardQuizFocused'];
        const valueAnswerTrying = action['payload']['valueAnswerTrying'];
        
        const answerCorrect =  yield select( (state) => state.card.getIn(['listCardQuizFocused', indexCardQuizFocused, 'answer']) ); 
        
        const kindAnswer = answerCorrect.getIn(['kind']);
        const valueAnswerCorrect = answerCorrect.getIn([kindAnswer,'value']);
        
        if (valueAnswerTrying === valueAnswerCorrect){
            
            yield put( actionsCard.return_REPLACE_CARD({
                location: ['listCardQuizFocused', indexCardQuizFocused, 'solved'],
                replacement: true
            }) );
            
        }
        else {
            
            yield put( actionsCard.return_REPLACE_CARD({
                location: ['listCardQuizFocused', indexCardQuizFocused, 'solved'],
                replacement: false
            }) );
            
        }
        
            
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listCardRewardFocused'],
                replacement: true
            }) );
        
        const { data } = yield call( getListCardReward_request, action.payload.objQuery );
        console.log(data);
        
        // main
        yield put( actionsCard.return_REPLACE_CARD({
            location: ['listCardRewardFocused'],
            replacement: data
        }) );

            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listCardRewardFocused'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listCardRewardFocused'],
                replacement: true
            }) );
        
        
    } catch (error) {
        
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listCardRewardFocused'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listCardRewardFocused'],
                replacement: false
            }) );
            
        console.log(error);
        console.log('GET_LIST_CARD_REWARD has been failed');
        //yield put( korean.return_GET_LIST_COLOR_Assignment_FAILURE() )
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