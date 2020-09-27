import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as config from '../../../config';


import IconHeart from '../../../svgs/symbol/IconHeart';
import { 
  Div_CardReward, 
  Div_CardReward_TopLeft, Div_CardReward_TopRight, Div_CardReward_BottomLeft, Div_CardReward_BottomRight, 
  Div_CardReward_CornerNumber, Button_SubmitAnswer,
  Div_CardReward_Quiz, Div_CardReward_Answer, Div_CardReward_AnswerText
} from './CardReward_Styled'

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
  
  /*
  const onClick_ChangeRole = useCallback(
    
    (event, roleNew) => {
      setRoleModifying(roleNew);
    },
    []
  );
  */
  
  
  return (
    
    <Div_CardReward index={index} indexZ={indexZ} degRotate={degRotate}>
    
      <Div_CardReward_TopLeft {...objColor}>
        <div> 
          Reward
        </div>
      </Div_CardReward_TopLeft>
      
      <Div_CardReward_TopRight {...objColor}> 
        <div> {returnIconSymbol('heart')} </div>
        <Div_CardReward_CornerNumber className={'card-number'} {...objColor} > {card.getIn(['number'])} </Div_CardReward_CornerNumber>
      </Div_CardReward_TopRight>
      
      <Div_CardReward_BottomLeft {...objColor}>
        <Div_CardReward_CornerNumber className={'card-number'} {...objColor} > {card.getIn(['number'])} </Div_CardReward_CornerNumber>
        <div> {returnIconSymbol('heart')} </div>
      </Div_CardReward_BottomLeft>
      
      <Div_CardReward_BottomRight {...objColor}> 
        <div> <Button_SubmitAnswer> Submit </Button_SubmitAnswer>  </div>
      </Div_CardReward_BottomRight>
        

      <Div_CardReward_Quiz>
        <div> {card.getIn(['quiz', 'instruction'])} </div>
        <div> {card.getIn(['quiz', 'text'])} </div>
      </Div_CardReward_Quiz>
      
      
    
    </Div_CardReward>
    
  )
}




export default CardQuiz;