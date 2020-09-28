import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';
import * as actionsCard from "../../../../store/actions/card";

import * as config from '../../../../config';

import { 
  Div_AnswerText
} from './CardQuiz_Styled'


function AnswerText({
  answer // 이것도 Immutable Map
}) {
  
  //const basic = useSelector( state => state.color.getIn(['basic']), [] );
  
  const dispatch = useDispatch();
  
  //const [roleModifying, setRoleModifying] = useState('background');
  
  /*
  const objColor = useMemo(()=>{
    
    let roleColor='';
    let phaseColor='';
    
    if (card.getIn(['symbol']) === 'heart'){ roleColor='main'; phaseColor='70' };
    return ( { roleColor, phaseColor} )
  }, [card]);
  */
  
  
  const onClick_SubmitAnswer = useCallback(
    
    (event) => {
      
      dispatch(
        actionsCard.return_SUBMIT_ANSWER({
          indexCardQuizFocused: indexCardQuizFocused,
          valueAnswerTrying: valueAnswerTrying
        })
      );
      
    },
    [card]
  );
  
  
  
  return (
    
    <Div_AnswerText>
      <div> 
        {answer.getIn([kind, 'placeholder'])}
      </div>
      <div>
        <input  type='text' placeholder={answer.getIn([kind, 'placeholder'])}/>
      </div>
    </Div_AnswerText>
    
  )
}


export default AnswerText;