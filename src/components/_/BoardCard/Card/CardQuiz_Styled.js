import styled from 'styled-components';
import Immutable from 'immutable';

import {Div_Card} from './Card_Styled';

export const Div_CardQuiz = styled(Div_Card)
`
  
  
  box-shadow:  ${
    props => {
      if (props.index === 0) {
        return (`
          0 0 8px 0px
          hsl(
            ${props.theme.getIn(['colorAssignment', 'basic', '40', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'basic', '40', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'basic', '40', 2])}%
          )
        `)
      }
      else {
        return (`
          0 0 0px 0px
          hsl(
            ${props.theme.getIn(['colorAssignment', 'basic', '60', 0])}, 
            ${props.theme.getIn(['colorAssignment', 'basic', '60', 1])}%, 
            ${props.theme.getIn(['colorAssignment', 'basic', '60', 2])}%
          )
        `)
      }
    }
  };
  
`;


const Div_CardQuiz_Corner = styled.div`
  position: absolute;
  width: auto;
  height: 30px;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  & > div {
    width: auto;
  }
`

export const Div_CardQuiz_TopLeft = styled(Div_CardQuiz_Corner)`
  font-size: 1.2rem;
  left: 10px;
  top: 10px;
`

export const Div_CardQuiz_TopRight = styled(Div_CardQuiz_Corner)`
  font-size: 1.2rem;
  right: 10px;
  top: 10px;
  
  & > div {
    color: ${props=>` 
      hsl(
        ${props.theme.getIn(['colorAssignment', props.roleColor, props.phaseColor, 0])}, 
        ${props.theme.getIn(['colorAssignment', props.roleColor, props.phaseColor, 1])}%, 
        ${props.theme.getIn(['colorAssignment', props.roleColor, props.phaseColor, 2])}%
      )
    `};
  }
`

export const Div_CardQuiz_BottomLeft = styled(Div_CardQuiz_Corner)`
  font-size: 1.2rem;
  left: 10px;
  bottom: 10px;
  
  & > div {
    color: ${props=>` 
      hsl(
        ${props.theme.getIn(['colorAssignment', props.roleColor, props.phaseColor, 0])}, 
        ${props.theme.getIn(['colorAssignment', props.roleColor, props.phaseColor, 1])}%, 
        ${props.theme.getIn(['colorAssignment', props.roleColor, props.phaseColor, 2])}%
      )
    `};
  }
`

export const Div_CardQuiz_BottomRight = styled(Div_CardQuiz_Corner)`
  font-size: 1.2rem;
  right: 10px;
  bottom: 10px;
`



export const Div_CardQuiz_CornerNumber = styled.div`
  width: auto;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 1.4rem;
  font-weight: bold;
`


export const Button_SubmitAnswer = styled.button`
  border-radius: 12px;
  background-color: ${props=>` 
    hsl(
      ${props.theme.getIn(['colorAssignment', 'basic', '60', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'basic', '60', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'basic', '60', 2])}%
    )
  `};
  color: ${props=>` 
    hsl(
      ${props.theme.getIn(['colorAssignment', 'basic', '10', 0])}, 
      ${props.theme.getIn(['colorAssignment', 'basic', '10', 1])}%, 
      ${props.theme.getIn(['colorAssignment', 'basic', '10', 2])}%
    )
  `};
`




export const Div_CardQuiz_Quiz = styled.div`
  width: 260px;
  margin-top: 60px;
  
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  & > div:nth-child(n+2){
    margin-top: 20px;
  }
  
  & > div:nth-child(1){ /* instruction */
    height: auto;
    min-height: 40px;
  }
`


export const Div_CardQuiz_Answer = styled.div`
  width: 260px;
  margin-bottom: 60px;
`
