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
  Div_CardQuiz_Quiz, Div_CardQuiz_Answer, Div_CardQuiz_AnswerText
} from './CardQuiz_Styled'

function CardQuiz({
  card,  // 이것도 Immutable Map
  index
}) {
  
  //const basic = useSelector( state => state.color.getIn(['basic']), [] );
  
  const dispatch = useDispatch();
  
  //const [roleModifying, setRoleModifying] = useState('background');
  
  useEffect(()=>{
    
  }, [])
  
  
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
    
    if (card.getIn(['symbol']) === 'heart'){ roleColor='main'; phaseColor='70' };
    return ( { roleColor, phaseColor} )
  }, [card]);
  
  const returnIconSymbol = useCallback(
    (symbol) => {
      if (symbol==='heart'){
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
    (objAnswer) => {
      const kind = objAnswer['kind'];  // 헷갈림 주의
      if (objAnswer['kind']==='text'){
        return (
          <Div_CardQuiz_AnswerText>
            <div> 
              {objAnswer[kind]['placeholder']}
            </div>
            <div>
              <input  type='text' placeholder={objAnswer[kind]['placeholder']}/>
            </div>
          </Div_CardQuiz_AnswerText>
        )
      }
    },
    []
  );
  
  
  const onClick_SubmitAnswer = useCallback(
    
    (event) => {
      
      dispatch(
        actionsCard.return_REPLACE_CARD({
          location: ['showingReward'],
          replacement: true
        })
      );
      
    },
    []
  );
  
  
  
  return (
    
    <Div_CardQuiz index={index} indexZ={indexZ} degRotate={degRotate}>
    
      <Div_CardQuiz_TopLeft {...objColor}>
        <div> 
          {card.getIn(['subject'])} 
        </div>
      </Div_CardQuiz_TopLeft>
      
      <Div_CardQuiz_TopRight {...objColor}> 
        <div> {returnIconSymbol('heart')} </div>
        <Div_CardQuiz_CornerNumber className={'card-number'} {...objColor} > {card.getIn(['number'])} </Div_CardQuiz_CornerNumber>
      </Div_CardQuiz_TopRight>
      
      <Div_CardQuiz_BottomLeft {...objColor}>
        <Div_CardQuiz_CornerNumber className={'card-number'} {...objColor} > {card.getIn(['number'])} </Div_CardQuiz_CornerNumber>
        <div> {returnIconSymbol('heart')} </div>
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
        {returnAnswer(card.getIn(['answer']).toJS())}
      </Div_CardQuiz_Answer>
      
    
    </Div_CardQuiz>
    
  )
}




export default CardQuiz;