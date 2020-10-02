import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS} from 'immutable';
import * as actionsCard from "../../../../store/actions/card";

import * as config from '../../../../config';

import AnswerText from './SideQuiz/AnswerText';

import IconHeart from '../../../../svgs/symbol/IconHeart';
import { 
  Div_SideQuiz, 
  Div_SideQuiz_TopLeft, Div_SideQuiz_TopRight, Div_SideQuiz_BottomLeft, Div_SideQuiz_BottomRight, 
  
  Button_SubmitAnswer,
  Div_SideQuiz_Quiz, Div_SideQuiz_Answer,
  
  Button_ViewReward,
  Div_SideQuiz_Explanation
} from './SideQuiz_Styled'



function SideQuiz({
  card,  // 이것도 Immutable Map
  index, 
  showing
}) {
  
  const kindAnswer = useSelector( state => state.card.getIn(['listCard', index, 'quiz', 'answer', 'kind']), [] );
  const valueTrying = useSelector( state => state.card.getIn(['listCard', index, 'status', 'answer', kindAnswer]), [] );
  
  const readyReward = useMemo(()=>{
    return card.getIn(['status', 'reward', 'ready']);
  }, [card]);
  
  const dispatch = useDispatch();
  
  //const [roleModifying, setRoleModifying] = useState('background');
  
  
  //console.log(kindAnswer)
  /*
  const indexZ = useMemo(()=>{
    return (200-index)
  }, [index]);
  */
  
  
  const objColor = useMemo(()=>{
    
    let roleColor='';
    let phaseColor='';
    
    if (card.getIn(['quiz', 'symbol']) === 'heart'){ roleColor='main'; phaseColor='70' };
    return ( { roleColor, phaseColor} )
  }, [card]);
  
  
  
  const solved = useMemo(()=> ( card.getIn(['status', 'solved'])), [card]);
  
  
  const listInstruction = useMemo(()=> ( card.getIn(['quiz', 'question', 'instruction']).toJS() ), [card]);
  const listContent = useMemo(()=> ( card.getIn(['quiz', 'question', 'content']).toJS() ), [card]);
  
  const valueCorrect = useMemo(()=> ( card.getIn(['quiz', 'answer', kindAnswer, 'content']) ), [card]);
  const listExplanation = useMemo(()=> ( card.getIn(['quiz', 'answer', 'explanation']).toJS() ), [card]);
  const listLink = useMemo(()=> ( card.getIn(['quiz', 'answer', 'link']).toJS() ), [card]);
  
  
  
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
      const kind = card.getIn(['quiz', 'answer', 'kind']);  // 헷갈림 주의
      if (kind ==='text'){
        return (
          <AnswerText card={card}/>
        )
      }
    },
    [card]
  );
  
  const onClick_SubmitAnswer = useCallback(
    (event) => {
      dispatch(
        actionsCard.return_SUBMIT_ANSWER({
          indexCardFocused: index,
          valueTrying: valueTrying
        })
      );
    },
    [card, index, valueTrying]
  );
  
  
  return (
    
    <Div_SideQuiz index={index}   >
    
      <Div_SideQuiz_TopLeft {...objColor}>
        <div> 
          {card.getIn(['quiz', 'subject'])} 
        </div>
      </Div_SideQuiz_TopLeft>
      
      <Div_SideQuiz_TopRight {...objColor}> 
        <div> {returnIconSymbol( card.getIn(['quiz', 'symbol']) )} </div>
      </Div_SideQuiz_TopRight>
      
      <Div_SideQuiz_BottomLeft {...objColor}>
        <div> { returnIconSymbol( card.getIn(['quiz', 'symbol']) )} </div>
      </Div_SideQuiz_BottomLeft>
      
      {!solved ? 
        <Div_SideQuiz_BottomRight {...objColor}> 
          <div> <Button_SubmitAnswer
            onClick={(event)=>onClick_SubmitAnswer(event)}
          > Submit </Button_SubmitAnswer>  </div>
        </Div_SideQuiz_BottomRight>
        :
        <Div_SideQuiz_BottomRight {...objColor}> 
          <div> <Button_ViewReward
            onClick={(event)=>onClick_SubmitAnswer(event)}
          > View Reward </Button_ViewReward>  </div>
        </Div_SideQuiz_BottomRight>
      }
        
      
      <Div_SideQuiz_Quiz>
        <div> 
          {listInstruction.map((element, index)=>(
            <div key={`instruction-${index}`}> {element} </div>
          ))} 
        </div>
        <div> 
          {listContent.map((element, index)=>(
            <div key={`content-${index}`}> {element} </div>
          ))} 
        </div>
      </Div_SideQuiz_Quiz>
        
        
      {!solved ? 
        <Div_SideQuiz_Answer>
          {returnAnswer()}
        </Div_SideQuiz_Answer>
        :
        <Div_SideQuiz_Explanation>
          <div>
            <div> {valueCorrect} </div>
          </div>
          <div> 
            {listExplanation.map((element, index)=>(
              <div key={`explanation-${index}`}> {element} </div>
            ))} 
          </div>
          <div> 
            {listLink.map((element, index)=>(
              <div key={`link-${index}`}> <a href={element} target="_blank"> {`Link ${index+1}`} </a> </div>
            ))} 
          </div>
        </Div_SideQuiz_Explanation>
      }
    
    </Div_SideQuiz>
    
  )
}




export default SideQuiz;