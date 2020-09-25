import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as config from '../../../config';



import {Div_Card} from './Card_Styled'

function Card({
  
}) {
  
  //const basic = useSelector( state => state.color.getIn(['basic']), [] );
  
  const dispatch = useDispatch();
  
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
    
    <Div_Card>
    
      <div>
        card number
      </div>
      
      <div>
        question
      </div>
      
      <div>
        answer
      </div>
      
    </Div_Card>
    
  )
}




export default Card;