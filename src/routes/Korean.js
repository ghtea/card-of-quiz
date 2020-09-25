import React, {useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import * as config from '../config';

import ListCard from "../components/_/ListCard"
//import Heroes from "../components/Player/Heroes"

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';








const Korean = ({
  
}) => {
  
  
   return (

    <Switch>
    
      <Route path="/korean/stage1" component={ListCard} />
      
    </Switch>
    
    )
}
  
 // <Route path={["/player/general", "/player/general/:battletagEncoded"]} component={General} />
    
 //CompGallery



export default Korean;

