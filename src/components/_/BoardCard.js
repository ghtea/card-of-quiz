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
import {Div_BoardCard} from './BoardCard_Styled'

function BoardCard({
  
}) {
  
  const listCard = useSelector( state => state.card.getIn(['listCard']), [] );
  const loadingListCardQuiz = useSelector( state => state.basic.getIn(['loading', 'listCardQuiz']), [] );
  const readyListCardQuiz = useSelector( state => state.basic.getIn(['ready', 'listCardQuiz']), [] );
  //console.log(listCard.toJS())
  
  const indexCardFocused = useSelector( state => state.card.getIn(['indexCardFocused']), [] );
  
  /*
  const cardFront = useMemo(()=>{
    return listCard.getIn([0])
  }, [listCard]);
  
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
  const colorTextHsl = useMemo(()=>{
   
    return `dd`
  }, []);
  
  
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
        {loadingListCardQuiz && <div> loading </div>}  
        
        {readyListCardQuiz && listCard.toJS().map( (objCard, index) => {
          //console.log(listCard.toJS())
          const card = fromJS(objCard);
          const showingReward = card.getIn(['reward', 'showing']);
          if (!showingReward) {
            return (
              <CardQuiz
                card={card}
                index={index}
                key={`card-quiz-index${index}`}
              />
            )
          }
          else {
            return (
              <CardReward
                card={card}
                index={index}
                key={`card-reward-index${index}`}
              />
            )
          }
        } )}
          
        
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