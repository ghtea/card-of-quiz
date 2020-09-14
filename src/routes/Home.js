import React, {useEffect, useCallback } from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as config from '../config';
//import replaceTheme from "./redux/thunks/replaceTheme";
//import { useCookies } from 'react-cookie';
//import dictCode from './others/dictCode'

//import Nav from "./routes/Nav";
//import Reaction from "./routes/Reaction";
//import Notification from "./routes/Notification";


//import Loading from "./components/_/Loading";
//import Home from "./routes/Home";

//import addDeleteNotification from "./redux/thunks/addDeleteNotification";
import * as theme from "../store/actions/theme";


import {Div_Home} from './Home_Styled'


function Home({
  
}) {
  
  const listColorScheme = useSelector( state => state.colorScheme.get('listColorScheme'), [] );
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    
  }, [])
  
  
  const onClick_ChangeColorScheme = useCallback(
    (event) => {
      //console.log(listColorScheme);
      
      dispatch( theme.return_REPLACE_THEME({
        location: ['usingTheme', 'colorScheme']
        , replacement: listColorScheme.getIn([0])
      }) )
    },
    [listColorScheme]
  );
  
  
  return (
    
    <Div_Home>
      <div>
        <button onClick={(event) => onClick_ChangeColorScheme(event)} > change color scheme </button>
      </div>
    </Div_Home>
    
  )
}




export default Home;