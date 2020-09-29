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
} from './AnswerText_Styled'


function AnswerText({
  answer // 이것도 Immutable Map
}) {
  

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
  
  /*
  dispatch( color.return_REPLACE_COLOR({
          location: [which, role, mode, element],
          replacement: Math.round(event.target.value)
        }) )
  */
  
  const indexCardFocused = useSelector( state => state.card.getIn(['indexCardFocused']), [] );
  
  const valueTrying = useSelector( state => state.card.getIn(['listCard', indexCardFocused, 'answer', 'text', 'valueTrying']), [] );
  const placeholder = useSelector( state => state.card.getIn(['listCard', indexCardFocused, 'answer', 'text', 'placeholder']), [] );
  
  const onChange_InputValueTrying = useCallback(
    (event) => {
      dispatch( actionsCard.return_REPLACE_CARD({
          location: ['listCard', indexCardFocused, 'answer', 'text', 'valueTrying'],
          replacement: event.target.value
        }) )
    },
    []
  );
  
  
  
  return (
    
    <Div_AnswerText>
      <div> 
        {answer.getIn(['text', 'placeholder'])}
      </div>
      <div>
        <input type='text' value={valueTrying} onChange={onChange_InputValueTrying} placeholder={placeholder}/>
      </div>
    </Div_AnswerText>
    
  )
}


export default AnswerText;