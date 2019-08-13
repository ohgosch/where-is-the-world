import React from 'react';
import styled from 'styled-components';

import { Wrap } from '../../../styles/Atoms/Wrap';
import { Filter } from './Filter';
import { CountryList } from './CountryList';

export const Main = () => (
  <Container>
    <Wrap>
      <Filter />
      <CountryList />
    </Wrap>
  </Container>
);

const Container = styled.div``;

export default Main;
