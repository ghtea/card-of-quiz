import React, {useMemo} from 'react';
import styled from 'styled-components';

import {useSelector, useDispatch} from "react-redux";
import Immutable from 'immutable';

//import {Div} from '../../styles/DefaultStyles';


const Div_Container = styled.div`
	
`;


// heart
const Icon = ({width, height, roleColor='basic', phaseColor='70' }) => {
	
	const usingTheme = useSelector( state => state.theme.get('usingTheme'), [] );
  //const dispatch = useDispatch();
  
  const color = useMemo(() => {
  	
  	return `
	  	hsl(
	      ${usingTheme.getIn(['colorAssignment', 'assignment', roleColor, phaseColor, 0])}, 
	      ${usingTheme.getIn(['colorAssignment', 'assignment', roleColor, phaseColor, 1])}%, 
	      ${usingTheme.getIn(['colorAssignment', 'assignment', roleColor, phaseColor, 2])}%)
	    `
  }, [usingTheme]);
  
  
	return (
		
	<Div_Container style= {{ width: `${width}`, height:`${height}` }} >
		<svg 
			
			className=""
			xmlns="http://www.w3.org/2000/svg" 
			
			
			width="100%"
			height="100%"
			viewBox="0 0 512 512"
			
			fill={ color }
			>
			
			<path 
				d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
			</path>
				
		</svg>
	</Div_Container>
	)
}

export default Icon;