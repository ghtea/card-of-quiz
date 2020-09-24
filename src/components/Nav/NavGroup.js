import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useSelector, useDispatch } from "react-redux";
import Immutable from 'immutable';


import { NavLink, useLocation, useHistory } from 'react-router-dom';

//import NavMd_ from '../components/Sub/NavMd_';

import { 
	Div_NavGroup, 
	Div_NavGroupItem, 
	Div_NavGroupItemTitle, Div_NavGroupItemPopup, 
	Div_Triangle, Div_Reactangle,
	Div_NavLink 
} from './NavGroup_Styled'
import logo from '../../images/favicon_io/android-chrome-192x192.png';



const NavGroup = ({

}) => {
	
	const location = useLocation();
	const history = useHistory();
	//const listColorScheme = useSelector( state => state.colorScheme.get('listColorScheme'), [] );
	//const dispatch = useDispatch();
	
	
	
	
	
	const [idSpotlighted, setIdSpotlighted] = useState("");
	
	const onMouseEnter_NavGroupItemTitle = useCallback(
    (event, newIdSpotlighted) => {
    		setIdSpotlighted(newIdSpotlighted);
    },
    [idSpotlighted]
  );
  const onMouseLeave_NavGroupItemTitle = useCallback(
    (event, newIdSpotlighted) => {
    		setIdSpotlighted("");
    },
    [idSpotlighted]
  );
  
	const onClick_NavGroupItemTitle = useCallback(
    (event, newIdSpotlighted) => {
    	
    	if (idSpotlighted !== newIdSpotlighted){
    		setIdSpotlighted(newIdSpotlighted);
    	}
    	else {
    		setIdSpotlighted("");
    	}
    	console.log(idSpotlighted)
    },
    [idSpotlighted]
  );
  
  
  useEffect(()=>{
  	console.log(`idSpotlighted is ${idSpotlighted}`);
  }, [idSpotlighted])
  
  
  
  const onClick_NavLink = useCallback(
    (event, destination) => {
      history.push(destination)
    },
    [history]
  );

	return (

		<Div_NavGroup>
			
			<Div_NavGroupItem
				onMouseEnter ={(event)=> onMouseEnter_NavGroupItemTitle(event, 'Korean') }
        onMouseLeave ={(event)=> onMouseLeave_NavGroupItemTitle(event, "") }
			>
			
				<Div_NavGroupItemTitle 
          onClick = {(event)=>onClick_NavGroupItemTitle(event, 'Korean') }
				> 
					Korean 
				</Div_NavGroupItemTitle>
				
					<Div_NavGroupItemPopup
						spotlighted={idSpotlighted==="Korean"}
					> 
						<Div_Triangle lengthBasic={12} onClick = {(event)=>onClick_NavGroupItemTitle(event, 'Korean') } /> 
						<Div_Reactangle>
							<Div_NavLink onClick={(event)=>onClick_NavLink(event, '/korean/1')}> 1 </Div_NavLink>
							<Div_NavLink onClick={(event)=>onClick_NavLink(event, '/korean/2')}> 2 </Div_NavLink>
							<Div_NavLink onClick={(event)=>onClick_NavLink(event, '/korean/3')}> 3 </Div_NavLink>
						</Div_Reactangle>
					</Div_NavGroupItemPopup>
				
			</Div_NavGroupItem>
			

		</Div_NavGroup>

	)
}


export default NavGroup;




/*

hover windoe   =>  color convertor, adjust    => text on background, logo on background,       => paste, copy smartly


color table                => multiple color-series                         => export as sass string     => save to database

color table   (focus)  =>   color series              =>   white, 10, 20, ..., 100, black               test (text-background)

color assignment  => 특정 항목에 특정 color series (_id가 아닌 그 당시 값) 를 부여   =>  특정 theme 완성


 
button, hover(popup), input, a,   box-shadow  그림자

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