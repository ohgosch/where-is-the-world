import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Input as InputStyle } from '../../../../styles/Atoms/Input';
import { color } from '../../../../styles/colors';
import { MEDIUM } from '../../../../logics/utils/responsive-size';

export const Input = () => (
  <Container>
    <IconWrap>
      <FontAwesomeIcon icon={faSearch} />
    </IconWrap>
    <InputElement placeholder="Search for a country" />
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;

  /* Small and Large */
  @media (min-width: ${MEDIUM.MIN}) {
    max-width: 400px;
  }
`;

const IconWrap = styled.div`
  position: absolute;
  left: 30px;
  color: ${color('placeholder')};
  pointer-events: none;
`;

const InputElement = styled(InputStyle)`
  width: 100%;
  padding-left: 65px;
`;

export default Input;
