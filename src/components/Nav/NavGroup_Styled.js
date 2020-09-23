import styled from 'styled-components';



export const Div_NavGroup = styled.div`

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


export const Div_NavGroupItem = styled.div`

  
  width: 100%;
  height: 36px;
  
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  overflow: visible;
  cursor: pointer;
  
  position: relative;
  
  &:nth-child(n+2){ margin-left: 8px; }
  
  
  @media (min-width:  ${props => props.theme.getIn(['media', 'sm_md']) }px) {
  
  	display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
	}
	
	/* &:hover > div:nth-child(2) { display: flex; } */
	
	
`



export const Div_NavGroupItemTitle = styled.div`
  width: auto;
	heigth: auto;
`


export const Div_NavGroupItemPopup = styled.div`
  width: 100%;   /* this make align center!!! */
  overflow: visible;
  
  /* 모바일에서 타이틀 클릭으로 온오프가능하게 */
  display: ${props=>props.spotlighted ? 'flex' : 'none' };
  
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  position: absolute;
  z-index: 400;
  top: 12px;
  left: 0;
  
  /*box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5); not works */
  
  
  
`
// triangle: https://css-tricks.com/triangle-with-shadow/

// props => props.lengthBasic   삼각형 빗면의 길이

// 
export const Div_Triangle = styled.div`
  width: ${props=>props.lengthBasic * 2}px;
  height: ${props=>props.lengthBasic * 2}px;
  position: relative;
  overflow: hidden;
  
  /*box-shadow: 0 16px 10px -17px rgba(0, 0, 0, 0.5); for cutted side */

  &::after {
    content: "";
    position: absolute;
    width: ${props=>props.lengthBasic}px;
    height: ${props=>props.lengthBasic}px;
    background: ${
      props => `hsl(
        ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 0])}, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 2])}%)
      `
    };
    transform: rotate(45deg); /* Prefixes... */
    top: ${props=>props.lengthBasic * 2 - props.lengthBasic * 0.5 }px;
    left: ${(props=>props.lengthBasic * 2 - props.lengthBasic)/2}px;
    
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
  }
`


export const Div_Reactangle = styled.div`
  
  width: 200px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1); 
  border-radius: 4px;
  
`
  

export const Div_NavLink = styled.div`
  height: 40px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:first-child { border-radius: 4px 4px 0 0; }
  
  &:last-child { border-radius: 0 0 4px 4px; }
  
  border-collapse: separate; 
  
  color: ${
    props => `hsl(
      ${props.theme.getIn(['colorScheme', 'color', 'basic', '60', 0])}, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', '60', 1])}%, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', '60', 2])}%)
    `
  };
  background-color: ${
    props => `hsl(
      ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 0])}, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 1])}%, 
      ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 2])}%)
    `
  };
  
  &:hover {
  
    color: ${
      props => `hsl(
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 0])}, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 2])}%)
      `
    };
    background-color: ${
      props => `hsl(
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '10', 0])}, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '10', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '10', 2])}%)
      `
    };
  }
  
`


/*
& > div:nth-child(1) {
    width: 0; 
    height: 0; 
    background-color: transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${
      props => `hsl(
        ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 0])}, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 2])}%)
      `
    };
    box-shadow: 0px -6px 6px 6px rgba(0, 0, 0, 0.5); 
    z-index: 401;
  }
*/