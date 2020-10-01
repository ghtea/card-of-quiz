import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import * as actionsCard from "../../../store/actions/card";

import * as config from '../../../config';

import SideQuiz from './Card/SideQuiz';
import SideReward from './Card/SideReward';

import {Div_Card} from './Card_Styled';


function Card({
  card,
  index
}) {
  
  // const indexCardFocused = useSelector( state => state.card.getIn(['indexCardFocused']), [] );
          
  useEffect(()=>{
     
    dispatch( actionsCard.return_MATCH_REWARD({
      indexCardMatching: index
    }) );
    
  },[])
  
  const indexCardFocused = useSelector( state => state.card.getIn(['indexCardFocused']), [] );
  const indexRemaining = useMemo(()=> (index-indexCardFocused) , [index, indexCardFocused]);
  
  //console.log('indexRemaining');
  //console.log(indexRemaining)
  
  const indexZ = useMemo(()=> (200-index+indexCardFocused) , [index]);
  
  const readyReward = useMemo(()=>{
    return card.getIn(['status', 'reward', 'ready']);
  }, [card]);
  const showingReward = useMemo(()=>{
    return card.getIn(['status', 'reward', 'showing']);
  }, [card]);
  
  
  const dispatch = useDispatch();
  
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
    
    <Div_Card 
      flipped={showingReward}
      indexZ={indexZ}
      indexRemaining={indexRemaining}
      
      key={`card-frame-index${index}`}
    >
      <SideQuiz
        card={card}
        index={index}
        showing={!showingReward}
        
        key={`card-quiz-index${index}`} 
      />
      {readyReward && 
        <SideReward
          card={card}
          index={index}
          showing={showingReward}
          
          key={`card-reward-index${index}`}
        />
      }
    </Div_Card>
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


export default Card;