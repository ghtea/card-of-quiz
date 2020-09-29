import styled from 'styled-components';
import Immutable from 'immutable';

// common styles in both CardQuiz and CardReward
export const Div_Card = styled.div
`
  
  width: 300px;
  height: 450px;
  border-radius: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  position: relative;
  
  background-color: ${
    props => {
      if (props.index === 0) {
        return (`
          hsl(
            ${props.theme.getIn(['colorAssignment', 'basic', 'white', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'basic', 'white', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'basic', 'white', 2])}%
          )
        `)
      }
      else {
        return (`
          hsl(
            ${props.theme.getIn(['colorAssignment', 'basic', '10', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'basic', '10', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'basic', '10', 2])}%
          )
        `)
      }
    }
  };
  
  border:  ${
    props => {
      if (props.index === 0) {
        return (`
          2px solid
          hsl(
            ${props.theme.getIn(['colorAssignment', 'basic', '60', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'basic', '60', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'basic', '60', 2])}%
          )
        `)
      }
      else {
        return (`
          1px solid
          hsl(
            ${props.theme.getIn(['colorAssignment', 'basic', '80', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'basic', '80', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'basic', '80', 2])}%
          )
        `)
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

