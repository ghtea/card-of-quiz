import React, {useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import * as config from '../config';

import Basic from "../components/Color/Basic"
//import Heroes from "../components/Player/Heroes"

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';








const Color = ({
  
}) => {
  
  
   return (

    <Switch>
    
      <Route path="/color/basic" component={Basic} />
      
      
    </Switch>
    
    )
}
  
 // <Route path={["/player/general", "/player/general/:battletagEncoded"]} component={General} />
    
 //CompGallery



export default Color;

