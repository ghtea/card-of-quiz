import styled from 'styled-components';
import Immutable from 'immutable';

export const Div_BoardCard = styled.div
`
  
  width: 350px;
  height: 520px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: relative;
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	}
  
  
`;