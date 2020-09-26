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
  card, 
  index
}) {
  
  //const basic = useSelector( state => state.color.getIn(['basic']), [] );
  
  const dispatch = useDispatch();
  
  //const [roleModifying, setRoleModifying] = useState('background');
  
  useEffect(()=>{
    
  }, [])
  
  
  const indexZ = useMemo(()=>{
    return (200-index)
  }, [index]);
  
  const degRotate = useMemo(()=>{
    if (index===0){
      return 0;
    }
    else {
      return ((Math.random() -0.5) * 10);
    }
  }, [index]);
  
  /*
  const onClick_ChangeRole = useCallback(
    
    (event, roleNew) => {
      setRoleModifying(roleNew);
    },
    []
  );
  */
  
  
  return (
    
    <Div_Card index={index} indexZ={indexZ} degRotate={degRotate}>
    
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