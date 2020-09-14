import styled from 'styled-components';



export const Div_NavItems = styled.div`

  width: 100%;
  height: 36px;
  
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorScheme', 'color', 'basic', '20', 0])}, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', '20', 1])}%, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', '20', 2])}%)
    `
  };
  
	display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  
  @media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
  	
	}
	
	& > div {
		width: auto;
		heigth: auto;
		
	}
`

