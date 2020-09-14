import styled from 'styled-components';



export const Div_Title = styled.div`

  width: 100%;
  height: 50px;
  
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 0])}, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 1])}%, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 2])}%)
    `
  };
  
	display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  
  @media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
  	
	  display: flex;
	  flex-direction: row;
	  justify-content: flex-start;
	  align-items: center;
	  
	}
	
	& > div {
		width: auto;
		heigth: auto;
	}
`

