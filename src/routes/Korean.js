import React, {useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import * as config from '../config';

import Stage1 from "../components/Korean/Stage1"
//import Heroes from "../components/Player/Heroes"

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';








const Korean = ({
  
}) => {
  
  
   return (

    <Switch>
    
      <Route path="/korean/stage1" component={Stage1} />
      
    </Switch>
    
    )
}
  
 // <Route path={["/player/general", "/player/general/:battletagEncoded"]} component={General} />
    
 //CompGallery



export default Color;

