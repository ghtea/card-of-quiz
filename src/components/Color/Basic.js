import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
//import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

import * as config from '../../config';



import {Div_Basic, Div_Roles, Div_Preview, Button_ChangeRole} from './Basic_Styled'

import Controller from './Basic/Controller';


function Basic({
  
}) {
  
  const basic = useSelector( state => state.color.getIn(['basic']), [] );
  
  const dispatch = useDispatch();
  
  const [roleModifying, setRoleModifying] = useState('background');
  
  useEffect(()=>{
    
  }, [])
  
  const colorTextHsl = useMemo(()=>{
    // 소수점 이용 가능 => 좀더 자세한 설정
    const h = basic.getIn([roleModifying, 'hsl', 'h']);
    const s = basic.getIn([roleModifying, 'hsl', 's']);
    const l = basic.getIn([roleModifying, 'hsl', 'l']);
    
    return `hsl(${h}, ${s}%, ${l}%)`
  }, [basic]);
  
  const colorTextHsla = useMemo(()=>{
    // 소수점 이용 가능 => 좀더 자세한 설정
    const h = basic.getIn([roleModifying, 'hsl', 'h']);
    const s = basic.getIn([roleModifying, 'hsl', 's']);
    const l = basic.getIn([roleModifying, 'hsl', 'l']);
    const opacity = basic.getIn([roleModifying, 'opacity']);
    
    return `hsla(${h}, ${s}%, ${l}%, ${opacity})`
  }, [basic]);
  
  
  const colorTextRgb = useMemo(()=>{
    const r = basic.getIn([roleModifying, 'rgb', 'r']);
    const g = basic.getIn([roleModifying, 'rgb', 'g']);
    const b = basic.getIn([roleModifying, 'rgb', 'b']);
    
    return `rgb(${r}, ${g}, ${b})`
  }, [basic])
  
  const colorTextRgba = useMemo(()=>{
    const r = basic.getIn([roleModifying, 'rgb', 'r']);
    const g = basic.getIn([roleModifying, 'rgb', 'g']);
    const b = basic.getIn([roleModifying, 'rgb', 'b']);
    const opacity = basic.getIn([roleModifying, 'opacity']);
    
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }, [basic])
  
  const colorTextHex = useMemo(()=>{
    const eachRgbToHex = (string) => parseInt(basic.getIn([roleModifying, 'rgb', string]), 10).toString(16);
    
    const red = eachRgbToHex('r');
    const green = eachRgbToHex('g');
    const blue = eachRgbToHex('b');
    
    return `#${red}${green}${blue}`
  }, [basic])
  
  
  
  const onClick_ChangeRole = useCallback(
    
    (event, roleNew) => {
      setRoleModifying(roleNew);
    },
    []
  );
  
  
  //.toString(16)
  
  return (
    
    <Div_Basic>
    
      <div>
        
        <Div_Roles>
        
          <div>
            <Div_Preview style={{ backgroundColor: colorTextHsla }}>  <div> Once Upon a Time... </div> </Div_Preview>
            <Div_Preview style={{ backgroundColor: colorTextRgba }}>  </Div_Preview>
          </div>
          
          <div>
            <Button_ChangeRole onClick={(event)=>onClick_ChangeRole(event, 'text')} active={roleModifying==='text'}> text </Button_ChangeRole>
            <Button_ChangeRole onClick={(event)=>onClick_ChangeRole(event, 'background')} active={roleModifying==='background'}> background </Button_ChangeRole>
            <Button_ChangeRole onClick={(event)=>onClick_ChangeRole(event, 'shape')} active={roleModifying==='shape'}> shape </Button_ChangeRole>
          </div>
          
        </Div_Roles>
      
        <div>
          <div> test font-background </div>
          <div> test shape-background </div>
        </div>
        
        <div>
          <div> {colorTextHsl} </div>
          <div> {colorTextRgb} </div>
          <div> {colorTextHex} </div>
          <div> hsla </div>
          <div> rgba </div>
          <div> view cymk </div>
        </div>
      </div>
      
      <Controller
        whichModifying={'basic'}
        roleModifying={roleModifying}
      />
      
    </Div_Basic>
    
  )
}




export default Basic;