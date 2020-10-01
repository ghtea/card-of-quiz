import styled from 'styled-components';
import Immutable from 'immutable';



export const Div_Side = styled.div
`
  /*
  width: 300px;
  height: 450px;
  */
  
  width: 100%;
  height: 100%;
  border-radius: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  
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
            ${props.theme.getIn(['colorAssignment', 'basic', 'white', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'basic', 'white', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'basic', 'white', 2])}%
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
          2px solid
          hsl(
            ${props.theme.getIn(['colorAssignment', 'basic', '80', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'basic', '80', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'basic', '80', 2])}%
          )
        `)
      }
    }
  };
  
  
  -webkit-perspective: 0;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0,0,0);
  visibility:visible;
  backface-visibility: hidden;
  
  position: absolute;
  
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	}
`;


