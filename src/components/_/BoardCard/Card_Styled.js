import styled from 'styled-components';
import Immutable from 'immutable';



// about transform   https://brunch.co.kr/@99-life/4
export const Div_CardFrame = styled.div`
  
  width: 300px;
  height: 450px;
  border-radius: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  z-index: ${props=>props.indexZ};
  
  left: 50%;
  top: 50%;
  
  transition: transform 1s;
  transform-style: preserve-3d;
  
  /*transform:${props=>`rotateX(${props.degRotate}deg) translateX(-50%) `};*/
  transform:${props=>props.flipped ? `rotateZ(${props.degRotate}deg) translateX(-50%) translateY(-50%) rotateY(180deg)` : `rotateZ(${props.degRotate}deg) translateX(-50%) translateY(-50%)` };*/
`
/*
  transition: transform 1s;
  transform-style: preserve-3d;
  */
/*transform:${props=>props.flipped ? `rotateX(${props.degRotate}deg) translateX(-50%) translateY(50%) rotateY(180deg)` : `rotateX(${props.degRotate}deg) translateX(-50%) translateY(50%) ` };*/


// common styles in both CardQuiz and CardReward
export const Div_Card = styled.div
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
  
  
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  
	@media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
	 
	}
`;


