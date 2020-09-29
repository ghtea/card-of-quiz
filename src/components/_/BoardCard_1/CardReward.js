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
  Div_CardReward_CornerNumber, Button_BackToQuiz,
  Div_CardReward_Reward
} from './CardReward_Styled'

function CardReward({
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
    
    if (card.getIn(['symbol']) === 'Heart'){ roleColor='main'; phaseColor='70' };
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
        <div> {returnIconSymbol(card.getIn(['symbol']))} </div>
      </Div_CardReward_TopRight>
      
      <Div_CardReward_BottomLeft {...objColor}>
        <div> {returnIconSymbol(card.getIn(['symbol']))} </div>
      </Div_CardReward_BottomLeft>
      
      <Div_CardReward_BottomRight {...objColor}> 
        <div> <Button_BackToQuiz> Quiz </Button_BackToQuiz>  </div>
      </Div_CardReward_BottomRight>
        

      <Div_CardReward_Reward>
        <div>  </div>
      </Div_CardReward_Reward>
      
      
    
    </Div_CardReward>
    
  )
}




export default CardReward;