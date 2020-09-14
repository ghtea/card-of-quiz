import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';


import { NavLink } from 'react-router-dom';

//import NavMd_ from '../components/Sub/NavMd_';

import { Div_Title } from './Title_Styled';
import IconHatWizard from '../../svgs/basic/IconHatWizard';
//import logo from '../../images/favicon_io/android-chrome-192x192.png';



const Title = ({
	
	}) => {
	
	//const listColorScheme = useSelector( state => state.colorScheme.get('listColorScheme'), [] );
  //const dispatch = useDispatch();
	
	
	return (
	
  <Div_Title>
  	
  	<div> <IconHatWizard width={'40px'} height={'40px'} positionColor={['basic', '10']} /> </div>
  	<div> W Design </div>
		
	</Div_Title>
	
	)
}


export default Title;
