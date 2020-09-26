import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as config from '../../config';

import Card from './BoardCard/Card';
import {Div_BoardCard} from './BoardCard_Styled'

function BoardCard({
  
}) {
  
  const listCardFocused = useSelector( state => state.card.getIn(['listCardFocused']), [] );
  
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
        {listCardFocused.map( (element, index) =>
          <Card
            card={element}
            index={index}
            key={`card-index${index}`}
          />
        )}
      </div>
      
    </Div_BoardCard>
    
  )
}




export default BoardCard;