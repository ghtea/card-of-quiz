import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';
import * as actionsCard from "../../../../../store/actions/card";

import * as config from '../../../../../config';

import { 
  Div_RewardGif, Img_RewardGif
} from './RewardGif_Styled'


function RewardGif({
  reward // 이것도 Immutable Map
}) {
  

  const dispatch = useDispatch();
  
  //const [roleModifying, setRoleModifying] = useState('background');
  
  /*
  const objColor = useMemo(()=>{
    
    let roleColor='';
    let phaseColor='';
    
    if (card.getIn(['symbol']) === 'heart'){ roleColor='main'; phaseColor='70' };
    return ( { roleColor, phaseColor} )
  }, [card]);
  */
  
  /*
  dispatch( color.return_REPLACE_COLOR({
          location: [which, role, mode, element],
          replacement: Math.round(event.target.value)
        }) )
  */
  
  return (
    
    <Div_RewardGif>
      <Img_RewardGif src={reward.getIn(['link'])} />
    </Div_RewardGif>
    
  )
}


export default RewardGif;