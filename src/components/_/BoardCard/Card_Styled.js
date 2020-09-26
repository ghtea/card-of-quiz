import styled from 'styled-components';
import Immutable from 'immutable';

export const Div_Card = styled.div
`
  
  width: 300px;
  height: 450px;
  border-radius: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: ${
    props => `hsl(
      ${props.theme.getIn(['colorAssignment', 'basic', 'white', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'basic', 'white', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'basic', 'white', 2])}%)
    `
  };
  border: 3px solid ${
    props => {
      if (props.index === 0) {
        return (
          `hsl(
            ${props.theme.getIn(['colorAssignment', 'main', '60', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'main', '60', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'main', '60', 2])}%)
          `
        )
      }
      else {
        return (
          `hsl(
            ${props.theme.getIn(['colorAssignment', 'main', '70', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'main', '70', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'main', '70', 2])}%)
          `
        )
      }
    }
  };
  
  position: absolute;
  z-index: ${props=>props.indexZ};
  
  top: 50%;
  left: 50%;
  transform: rotate(${props=>props.degRotate}deg) translateX(-50%) translateY(-50%) ;
    
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	}
  
  
`;