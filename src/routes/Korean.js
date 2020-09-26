import React, {useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import * as config from '../config';

import BoardCard from "../components/_/BoardCard"
//import Heroes from "../components/Player/Heroes"

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';








const Korean = ({
  
}) => {
  
  
   return (

    <Switch>
    
      <Route path="/korean/:symbol" component={BoardCard} />
      
    </Switch>
    
    )
}
  
 // <Route path={["/player/general", "/player/general/:battletagEncoded"]} component={General} />
    
 //CompGallery



export default Korean;

