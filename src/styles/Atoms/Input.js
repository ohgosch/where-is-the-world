import styled from 'styled-components';
import { color } from '../colors';

export const Input = styled.input`
  background-color: ${color('white')};
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, .1);
  height: 50px;
  padding: 0 20px;
  font-weight: 600;
  color: ${color('inputs')};

  &::placeholder {
    color: ${color('placeholder')};
  }
`;
