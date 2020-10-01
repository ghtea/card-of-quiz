import styled from 'styled-components';
import Immutable from 'immutable';

export const Div_BoardCard = styled.div
`
  width: 100%;
  max-width: 500px;
  min-width: 350px;
  height: 520px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: relative;
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	}
  
  
`;



export const Div_Move = styled.div
`
  width: 60px;
  height: 60px;
  
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  top: 50%;
  
  z-index:300;
  
  
  & > button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    
    font-size: 2rem;
    font-weight: bold;
  }
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	}
`;


export const Div_Before = styled(Div_Move)
`
  left: 0;
  transform: translateY(-50%) translateX(50%);
`;

export const Div_Next = styled(Div_Move)
`
  right: 0;
  transform: translateY(-50%) translateX(-50%);
`;
