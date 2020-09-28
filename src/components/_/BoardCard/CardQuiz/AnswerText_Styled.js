import styled from 'styled-components';
import Immutable from 'immutable';

import {Div_Card} from './Card_Styled';


export const Div_AnswerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  & > div:nth-child(1){
    width: auto;
    height: 30px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  
& > div:nth-child(2){
    & > input {
    }
  }
`