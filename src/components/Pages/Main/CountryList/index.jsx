import React from 'react';
import styled from 'styled-components';

import { CountryCard } from './CountryCard';
import { MEDIUM, LARGE } from '../../../../logics/responsive';

export const CountryList = () => (
  <Container>
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-top: 50px;

  /* Medium */
  @media (min-width:${MEDIUM.MIN}) and (max-width: ${MEDIUM.MAX}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  /* Large */
  @media (min-width: ${LARGE.MIN}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default CountryList;
