import React from 'react';
import styled from 'styled-components';

import { Input } from './Input';
import { Select } from './Select';
import { SMALL } from '../../../../logics/utils/responsive-size';

export const Filter = () => (
  <Container>
    <Input />
    <Select />
  </Container>
);

const Container = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: 1fr auto;
  grid-gap: 40px;

  /* Small */
  @media (max-width: ${SMALL.MAX}) {
    grid-template-columns: 1fr;
  }
`;

export default Filter;
