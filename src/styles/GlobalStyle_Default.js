import styled, {createGlobalStyle} from 'styled-components';
//import Immutable from 'immutable';


const GlobalStyle_Default = createGlobalStyle`
  
  body {
    background-color: ${
      props => `hsl(
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '10', 0])}, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '10', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '10', 2])}%)
      `
    };
    
    color: ${
      props => `hsl(
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 0])}, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 2])}%)
      `
    };
    
  }
  
  div {
    width: 100%; /* is good for */
    height: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    flex-shrink: 0;
    flex-grow: 0;
    
    box-sizing: border-box;
    
  }
  
  
  
  
  a {
    text-decoration: none;
  }
  
  
  
  img {
    object-fit: cover;
  }
  
  
  
  
  button {
    
    background-color: ${
      props => `hsl(
        ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 0])}, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', 'white', 2])}%)
      `
    };
    
    color: ${
      props => `hsl(
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 0])}, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 2])}%)
      `
    };
    
    
    width: auto;
    height: 2.4rem;
    
    font-size: 1rem;
    
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    
    
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    flex-shrink: 0;
    flex-grow: 0;
      
    
    
    /* working, https://webisfree.com/2019-02-08/[css]-outline%EC%9D%84-%EB%91%A5%EA%B8%80%EA%B2%8C-%ED%91%9C%ED%98%84%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%80-radius */
    
    border-radius: 0.5rem;
    border: 0;
    /*border: 2px solid transparent;*/
    
    &:focus, &:active {
     outline: none;
     /*border: 2px solid ${props => props.theme.color_weak};*/
    }
    
    
    cursor: pointer;
  
    box-sizing: border-box;
      
  }
`

export default GlobalStyle_Default;