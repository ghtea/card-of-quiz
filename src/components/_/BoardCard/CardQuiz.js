import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';
import * as actionsCard from "../../../store/actions/card";

import * as config from '../../../config';

import AnswerText from './CardQuiz/AnswerText';

import IconHeart from '../../../svgs/symbol/IconHeart';
import { 
  Div_CardQuiz, 
  Div_CardQuiz_TopLeft, Div_CardQuiz_TopRight, Div_CardQuiz_BottomLeft, Div_CardQuiz_BottomRight, 
  Div_CardQuiz_CornerNumber, Button_SubmitAnswer,
  Div_CardQuiz_Quiz, Div_CardQuiz_Answer
} from './CardQuiz_Styled'



function CardQuiz({
  card,  // 이것도 Immutable Map
  index,
  showing
}) {
  
  const indexCardFocused = useSelector( state => state.card.getIn(['indexCardFocused']), [] );
  
  const kindAnswer = useSelector( state => state.card.getIn(['listCard', indexCardFocused, 'answer', 'kind']), [] );
  const valueTrying = useSelector( state => state.card.getIn(['listCard', indexCardFocused, 'answer', kindAnswer, 'valueTrying']), [] );
  
  const dispatch = useDispatch();
  
  //const [roleModifying, setRoleModifying] = useState('background');
  
  useEffect(()=>{
    if ( card.getIn(['solved']) === false ) {
      dispatch( actionsCard.return_MATCH_REWARD({
        indexCardMatching: index
      }) );
    }
  },[])
  
  /*
  const indexZ = useMemo(()=>{
    return (200-index)
  }, [index]);
  */
  
  
  const objColor = useMemo(()=>{
    
    let roleColor='';
    let phaseColor='';
    
    if (card.getIn(['symbol']) === 'heart'){ roleColor='main'; phaseColor='70' };
    return ( { roleColor, phaseColor} )
  }, [card]);
  
  
  const returnIconSymbol = useCallback(
    (symbol) => {
      if (symbol==='Heart'){
        return (
          <IconHeart 
            width={'28px'} height={'28px'}
          	roleColor={'main'} phaseColor={'70'}
            filled={true} 
          />
        )
      }
    },
    []
  );
  
  const returnAnswer = useCallback(
    () => {
      const kind = card.getIn(['answer', 'kind']);  // 헷갈림 주의
      if (kind ==='text'){
        return (
          <AnswerText answer={card.getIn(['answer'])}/>
        )
      }
    },
    [card]
  );
  
  const onClick_SubmitAnswer = useCallback(
    (event) => {
      dispatch(
        actionsCard.return_SUBMIT_ANSWER({
          indexCardFocused: indexCardFocused,
          valueTrying: valueTrying
        })
      );
    },
    [card, indexCardFocused, valueTrying]
  );
  
  
  return (
    
    <Div_CardQuiz index={index}  >
    
      <Div_CardQuiz_TopLeft {...objColor}>
        <div> 
          {card.getIn(['subject'])} 
        </div>
      </Div_CardQuiz_TopLeft>
      
      <Div_CardQuiz_TopRight {...objColor}> 
        <div> {returnIconSymbol( card.getIn(['symbol']) )} </div>
      </Div_CardQuiz_TopRight>
      
      <Div_CardQuiz_BottomLeft {...objColor}>
        <div> { returnIconSymbol( card.getIn(['symbol']) )} </div>
      </Div_CardQuiz_BottomLeft>
      
      <Div_CardQuiz_BottomRight {...objColor}> 
        <div> <Button_SubmitAnswer
          onClick={(event)=>onClick_SubmitAnswer(event)}
        > Submit </Button_SubmitAnswer>  </div>
      </Div_CardQuiz_BottomRight>
        

      <Div_CardQuiz_Quiz>
        <div> {card.getIn(['quiz', 'instruction'])} </div>
        <div> {card.getIn(['quiz', 'text'])} </div>
      </Div_CardQuiz_Quiz>
      
      <Div_CardQuiz_Answer>
        {returnAnswer()}
      </Div_CardQuiz_Answer>
      
    
    </Div_CardQuiz>
    
  )
}




export default CardQuiz;