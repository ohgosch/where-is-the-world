import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Input as InputStyle } from '../../../../styles/Atoms/Input';
import { color } from '../../../../styles/colors';

export const Select = () => (
  <Container>
    <IconWrap>
      <FontAwesomeIcon icon={faChevronDown} />
    </IconWrap>
    <InputElement as="select">
      <option value={0}>Filter by Region</option>
    </InputElement>
  </Container>
);

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  max-width: 200px;
`;

const IconWrap = styled.div`
  position: absolute;
  right: 15px;
  color: ${color('placeholder')};
  pointer-events: none;
  font-size: 12px;
`;

const InputElement = styled(InputStyle)`
  width: 100%;
  padding-right: 35px;
  -webkit-appearance: inherit;
`;

export default Select;
