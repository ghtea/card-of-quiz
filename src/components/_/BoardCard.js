import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import * as actionsCard from "../../store/actions/card";

import * as config from '../../config';

import Card from './BoardCard/Card';
import {
  Div_BoardCard,
  Div_Before, Div_Next
} from './BoardCard_Styled';


function BoardCard({
  
}) {
  
  const listCard = useSelector( state => state.card.getIn(['listCard']), [] );
  
  const lengthListCard = useMemo( ()=> listCard.size , [listCard] );
  const listCardZero = useMemo( ()=> Array(lengthListCard).fill(0) , [listCard, lengthListCard] );
  console.log(listCard.toJS())
  
  const loadingListQuiz = useSelector( state => state.basic.getIn(['loading', 'listQuiz']), [] );
  const readyListQuiz = useSelector( state => state.basic.getIn(['ready', 'listQuiz']), [] );
  
  const readyListCard = useSelector( state => state.basic.getIn(['ready', 'listCard']), [] );
  //console.log(listCard.toJS())
  
  const indexCardFocused = useSelector( state => state.card.getIn(['indexCardFocused']), [] );
  
  /*
  const listCardOthers = useMemo(()=>{
    const result = listCard.shift()
    return result;
  }, [listCard]);
  */
  
  const dispatch = useDispatch();
  
  const { symbol } = useParams();
  //const [roleModifying, setRoleModifying] = useState('background');
  
  useEffect(()=>{
    
  }, [])
  
  
  const onClick_Move = useCallback(
    (event, movement, indexCardNew) => {
      dispatch(actionsCard.return_CHANGE_CARD_FOCUSED({
        movement, 
        indexCardNew
      }));
    },
    []
  );
  
  
  
  return (
    
    <Div_BoardCard>
      
      <div>
      
        {loadingListQuiz && <div> loading listQuiz </div>}  
        
        {readyListQuiz && !readyListCard && <div> listQuiz ready, listCard un-ready </div>}  
        
        
        {readyListCard && listCardZero.map( (element, index) =>  {
          if (index >= indexCardFocused) {
            return (
              <Card 
                card={listCard.getIn([index])}
                index={index}
                key={`card-${index}`}
              />
            )
          }
        } )}
          
      </div>
      
      <Div_Before> <button onClick={(event)=>onClick_Move(event, 'before', undefined)}> {`<`} </button> </Div_Before>
      <Div_Next> <button onClick={(event)=>onClick_Move(event, 'next', undefined)}> {`>`} </button> </Div_Next>
      
    </Div_BoardCard>
    
  )
}

/*

          (<>
          {!showingReward?
            <CardQuiz
              card={cardFront}
              index={0}
              key={`card-index0`}
            />
            : <CardReward
              />
          }
          {listCardQuizFocusedOthers.map( (element, indexOthers) =>
            (<CardQuiz
              card={element}
              index={indexOthers+1}
              key={`card-index${indexOthers+1}`}
            />)
          )}
          </>)
          : <div> not ready </div>
        }  
*/


export default BoardCard;