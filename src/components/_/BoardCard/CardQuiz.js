import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';
import * as actionsCard from "../../../store/actions/card";

import * as config from '../../../config';


import IconHeart from '../../../svgs/symbol/IconHeart';
import { 
  Div_CardQuiz, 
  Div_CardQuiz_TopLeft, Div_CardQuiz_TopRight, Div_CardQuiz_BottomLeft, Div_CardQuiz_BottomRight, 
  Div_CardQuiz_CornerNumber, Button_SubmitAnswer,
  Div_CardQuiz_Quiz, Div_CardQuiz_Answer
} from './CardQuiz_Styled'

function CardQuiz({
  cardQuiz,  // 이것도 Immutable Map
  index
}) {
  
  //const basic = useSelector( state => state.color.getIn(['basic']), [] );
  
  const dispatch = useDispatch();
  
  //const [roleModifying, setRoleModifying] = useState('background');
  
  
  const indexZ = useMemo(()=>{
    return (200-index)
  }, [index]);
  
  const degRotate = useMemo(()=>{
    if (index===0){
      return 0;
    }
    else {
      return ((Math.random() -0.5) * 10);
    }
  }, [index]);
  
  
  
  const objColor = useMemo(()=>{
    
    let roleColor='';
    let phaseColor='';
    
    if (cardQuiz.getIn(['symbol']) === 'heart'){ roleColor='main'; phaseColor='70' };
    return ( { roleColor, phaseColor} )
  }, [cardQuiz]);
  
  
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
      const kind = cardQuiz.getIn(['answer', 'kind']);  // 헷갈림 주의
      if (objAnswer['kind']==='text'){
        return (
          <AnswerText answer={cardQuiz.getIn(['answer'])}/>
        )
      }
    },
    [cardQuiz]
  );
  
  
  const onClick_SubmitAnswer = useCallback(
    
    (event) => {
      
      dispatch(
        actionsCard.return_SUBMIT_ANSWER({
          cardQuiz: cardQuiz,
          valueAnswer: valueAnswer
        })
      );
      
    },
    [cardQuiz]
  );
  
  
  
  return (
    
    <Div_CardQuiz index={index} indexZ={indexZ} degRotate={degRotate}>
    
      <Div_CardQuiz_TopLeft {...objColor}>
        <div> 
          {cardQuiz.getIn(['subject'])} 
        </div>
      </Div_CardQuiz_TopLeft>
      
      <Div_CardQuiz_TopRight {...objColor}> 
        <div> {returnIconSymbol( cardQuiz.getIn(['symbol']) )} </div>
      </Div_CardQuiz_TopRight>
      
      <Div_CardQuiz_BottomLeft {...objColor}>
        <div> { returnIconSymbol( cardQuiz.getIn(['symbol']) )} </div>
      </Div_CardQuiz_BottomLeft>
      
      <Div_CardQuiz_BottomRight {...objColor}> 
        <div> <Button_SubmitAnswer
          onClick={(event)=>onClick_SubmitAnswer(event)}
        > Submit </Button_SubmitAnswer>  </div>
      </Div_CardQuiz_BottomRight>
        

      <Div_CardQuiz_Quiz>
        <div> {cardQuiz.getIn(['quiz', 'instruction'])} </div>
        <div> {cardQuiz.getIn(['quiz', 'text'])} </div>
      </Div_CardQuiz_Quiz>
      
      <Div_CardQuiz_Answer>
        {returnAnswer()}
      </Div_CardQuiz_Answer>
      
    
    </Div_CardQuiz>
    
  )
}




export default CardQuiz;