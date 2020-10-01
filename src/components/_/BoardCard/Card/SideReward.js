import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';
import * as actionsCard from "../../../../store/actions/card";

import * as config from '../../../../config';

import RewardGif from './SideReward/RewardGif';

import IconHeart from '../../../../svgs/symbol/IconHeart';
import { 
  Div_SideReward, 
  Div_SideReward_TopLeft, Div_SideReward_TopRight, Div_SideReward_BottomLeft, Div_SideReward_BottomRight, 
  Div_SideReward_CornerNumber, Button_BackToQuiz,
  Div_SideReward_Reward
} from './SideReward_Styled'

function SideReward({
  card,  // 이것도 Immutable Map
  index,
  showing
}) {
  
  //const basic = useSelector( state => state.color.getIn(['basic']), [] );
  
  const dispatch = useDispatch();
  
  //const [roleModifying, setRoleModifying] = useState('background');
  
  useEffect(()=>{
    
  }, [])
  
  /*
  const indexZ = useMemo(()=>{
    return (200-index)
  }, [index]);
  */
  
  
  
  
  
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
  
  
  const returnReward = useCallback(
    () => {
      const kind = card.getIn(['reward', 'kind']);  // 헷갈림 주의]
      
      //console.log('kind');
      //console.log(kind);
      
      if (kind ==='gif'){
        return (
          <RewardGif reward={card.getIn(['reward'])}/>
        )
      }
    },
    [card]
  );
  
  const onClick_BackToQuiz = useCallback(
    (event) => {
      dispatch(
        actionsCard.return_REPLACE_CARD({
          location: ['listCard', index, 'status', 'reward', 'showing'],
          replacement: false
        })
      );
    },
    [index, actionsCard]
  );
  
  return (
    
    <Div_SideReward index={index} >
    
      <Div_SideReward_TopLeft {...objColor}>
        <div> 
          Reward
        </div>
      </Div_SideReward_TopLeft>
      
      <Div_SideReward_TopRight {...objColor}> 
        <div> {returnIconSymbol(card.getIn(['symbol']))} </div>
      </Div_SideReward_TopRight>
      
      <Div_SideReward_BottomLeft {...objColor}>
        <div> {returnIconSymbol(card.getIn(['symbol']))} </div>
      </Div_SideReward_BottomLeft>
      
      <Div_SideReward_BottomRight {...objColor}> 
        <div> <Button_BackToQuiz onClick={onClick_BackToQuiz}> Explanation </Button_BackToQuiz>  </div>
      </Div_SideReward_BottomRight>
        

      <Div_SideReward_Reward>
        {returnReward()}
      </Div_SideReward_Reward>
      
      
      
    
    </Div_SideReward>
    
  )
}




export default SideReward;