import styled from 'styled-components';
import Immutable from 'immutable';



// about transform   https://brunch.co.kr/@99-life/4
export const Div_Card = styled.div`
  
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
  
  /*transform: translateZ( ${props=>props.indexRemaining}px );*/
  /*transform:${props=>`rotateX(${props.degRotate}deg) translateX(-50%) `};*/
  /*transform:${props=>props.flipped ? `rotateZ(${props.degRotate}deg) ` : `rotateZ(${props.degRotate}deg) ` };*/
  
  transform: translateX(-50%) translateY(-50%)
    ${props=>(props.indexRemaining > 0) ? `rotateZ(${(Math.random() -0.5) * 10}deg)` : `rotateZ(0deg)`}
    ${props=>(props.indexRemaining > 0) ? `scale(1)` : `scale(1)`}
    
    ${props=>props.flipped && `rotateY(180deg)`}
    ;
  
`
/*
  
  const degRotate = useMemo(()=>{
    if (index-indexCardFocused===0){
      return 0;
    }
    else {
      return ((Math.random() -0.5) * 10);
    }
  }, [card, index, indexCardFocused]);
  

  transition: transform 1s;
  transform-style: preserve-3d;
  */
/*transform:${props=>props.flipped ? `rotateX(${props.degRotate}deg) translateX(-50%) translateY(50%) rotateY(180deg)` : `rotateX(${props.degRotate}deg) translateX(-50%) translateY(50%) ` };*/

