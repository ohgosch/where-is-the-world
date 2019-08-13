import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import { Wrap } from '../../styles/Atoms/Wrap';
import { H1 } from '../../styles/typography';
import { color } from '../../styles/colors';
import { SMALL } from '../../logics/responsive';

export const Header = () => (
  <Container>
    <Content>
      <Link to="/">
        <H1>Where is the world?</H1>
      </Link>
      <DarkMode title="Dark Mode">
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark Mode</span>
      </DarkMode>
    </Content>
  </Container>
);

export default Header;

const Container = styled.header`
  background-color: ${color('white')};
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, .1);
  margin-bottom: 30px;
`;

const Content = styled(Wrap)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const DarkMode = styled.button`
  color: ${color('secondary')};
  font-weight: 600;
  padding: 15px;
  font-size: 16px;

  /* Small */
  @media (max-width: ${SMALL.MAX}) {
    font-size: 14px;
  }

  span {
    display: inline-block;
    margin-left: 5px;
  }
`;
