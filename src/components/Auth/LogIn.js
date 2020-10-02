import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS, fromJS} from 'immutable';

import * as actionsCard from "../../store/actions/card";

import * as config from '../../config';

import useInput from '../../tools/hooks/useInput';


import {
  Div_LogIn
} from './LogIn_Styled';


function LogIn({
  
}) {
  
  //const listCard = useSelector( state => state.card.getIn(['listCard']), [] );
  
  //const listCardZero = useMemo( ()=> Array(lengthListCard).fill(0) , [listCard, lengthListCard] );
  
  /*
  const listCardOthers = useMemo(()=>{
    const result = listCard.shift()
    return result;
  }, [listCard]);
  */
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    
  }, [])
  
  const inputEmailId = useInput(""); // {value, setValue, onChange};
  const inputPassword = useInput(""); // {value, setValue, onChange};
  
  /*
  const onClick_Move = useCallback(
    (event, movement, indexCardNew) => {
      dispatch(actionsCard.return_CHANGE_CARD_FOCUSED({
        movement, 
        indexCardNew
      }));
    },
    []
  );
  */
  
  
  return (
    
    <Div_LogIn>
      
      <div>
        <div> Email of id </div>
        <input {...inputEmailBattletag}  placeholder="email or id"  
          onKeyPress={onKeyPress_LogIn}
        />
      </div>
      
      <div>
        <div> Password  </div>
        <input {...inputPassword}  placeholder="password" type="password" 
          onKeyPress={onKeyPress_LogIn}
        />
      </div>
      
    </Div_LogIn>
    
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


export default LogIn;