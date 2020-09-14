import React, {
	useState, useEffect, useCallback
}
from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
	useSelector, useDispatch
}
from "react-redux";
import Immutable from 'immutable';


import {
	NavLink
}
from 'react-router-dom';

//import NavMd_ from '../components/Sub/NavMd_';

import {
	Div_NavItems
}
from './NavItems_Styled'
import logo from '../../images/favicon_io/android-chrome-192x192.png';



const NavItems = ({

}) => {

	//const listColorScheme = useSelector( state => state.colorScheme.get('listColorScheme'), [] );
	//const dispatch = useDispatch();


	return (

		< Div_NavItems >

		< div > < /div> < div > W Design < /div>

		< /Div_NavItems>

	)
}


export default NavItems;




/*

color convertor, adjust    => text on background, logo on background,       => paste, copy smartly

color series              =>   white, 10, 20, ..., 100, black               => export as sass            => save to database
color table                => multiple color-series                         => export as sass string     => save to database



color assignment  => 특정 항목에 특정 color series 를 부여   =>  특정 theme 완성



button, hover(popup), input, a

, nav, social share

, comment, credit card, login, sign up



user profile, 
setting


 404 page



(bonus)
calendar
calculater
music player




*/