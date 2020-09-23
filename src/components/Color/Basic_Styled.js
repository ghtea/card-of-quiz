import styled from 'styled-components';


export const Div_Basic = styled.div
`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
`;

export const Div_Roles = styled.div`
  & > div:nth-child(1){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  & > div:nth-child(2){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`


export const Div_Preview = styled.div`
  width: 180px;
  height: 30px;
`

export const Button_ChangeRole = styled.button`
  &:nth-child(n+2){margin-left: 10px;}
  
  font-weight: ${props => props.active? 'bold' : 'normal'};
  
  color: ${props => props.active? 
    `hsl(
      ${props.theme.getIn(['colorScheme', 'color', 'main', '60', 0])}, 
      ${props.theme.getIn(['colorScheme', 'color', 'main', '60', 1])}%, 
      ${props.theme.getIn(['colorScheme', 'color', 'main', '60', 2])}%)
    `
    : `hsl(
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 0])}, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 1])}%, 
        ${props.theme.getIn(['colorScheme', 'color', 'basic', '70', 2])}%)
      `
  };
  
  border: 2px solid ${props => props.active? 
    `hsl(
      ${props.theme.getIn(['colorScheme', 'color', 'main', '60', 0])}, 
      ${props.theme.getIn(['colorScheme', 'color', 'main', '60', 1])}%, 
      ${props.theme.getIn(['colorScheme', 'color', 'main', '60', 2])}%)
    `
    : 'transparent'
  };
`