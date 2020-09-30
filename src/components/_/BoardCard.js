import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import * as config from '../../config';

import CardQuiz from './BoardCard/CardQuiz';
import CardReward from './BoardCard/CardReward';
import {Div_BoardCard} from './BoardCard_Styled';
import {Div_CardFrame} from './BoardCard/Card_Styled';


function BoardCard({
  
}) {
  
  const listCard = useSelector( state => state.card.getIn(['listCard']), [] );
  
  const lengthListCard = useMemo( ()=> listCard.size , [listCard] );
  const listCardZero = useMemo( ()=> Array(lengthListCard).fill(0) , [listCard, lengthListCard] );
  
  
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
  
  /*
  const onClick_ChangeRole = useCallback(
    
    (event, roleNew) => {
      setRoleModifying(roleNew);
    },
    []
  );
  */
  
  
  return (
    
    <Div_BoardCard>
      
      <div>
      
        {loadingListQuiz && <div> loading listQuiz </div>}  
        
        {readyListQuiz && !readyListCard && <div> listQuiz ready, listCard un-ready </div>}  
        
        
        {readyListCard && listCardZero.map( (element, index) =>  (
          <Card 
            card={listCard.getIn([index])}
          /> 
        ) )}
          
          
          
        
      </div>
      
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