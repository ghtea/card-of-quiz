import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS} from 'immutable';

import * as config from '../../config';

import CardQuiz from './BoardCard/CardQuiz';
import CardReward from './BoardCard/CardReward';
import {Div_BoardCard} from './BoardCard_Styled'

function BoardCard({
  
}) {
  
  const listCardQuizFocused = useSelector( state => state.card.getIn(['listCardQuizFocused']), [] );
  const loadingListCardQuizFocused = useSelector( state => state.basic.getIn(['loading', 'listCardQuizFocused']), [] );
  const readyListCardQuizFocused = useSelector( state => state.basic.getIn(['ready', 'listCardQuizFocused']), [] );
  
  const cardFront = useMemo(()=>{
    return listCardQuizFocused.getIn([0])
  }, [listCardQuizFocused]);
  
  const [showingReward, setShowingReward] = useState(false);
  
  const listCardQuizFocusedOthers = useMemo(()=>{
    const result = listCardQuizFocused.shift()
    return result;
  }, [listCardQuizFocused]);
  
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
        {loadingListCardQuizFocused && <div> loading </div>}  
        
        {readyListCardQuizFocused ? 
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
        
      </div>
      
    </Div_BoardCard>
    
  )
}




export default BoardCard;