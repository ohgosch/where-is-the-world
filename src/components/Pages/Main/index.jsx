import React from 'react';
import styled from 'styled-components';

import { Wrap } from '../../../styles/Atoms/Wrap';
import { Filter } from './Filter';

export const Main = () => (
  <Container>
    <Wrap>
      <Filter />
    </Wrap>
  </Container>
);

const Container = styled.div``;

export default Main;
