import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';

import { Wrap } from '../../styles/Atoms/Wrap';
import { H1 } from '../../styles/typography';
import { color } from '../../styles/colors';
import { SMALL } from '../../logics/utils/responsive-size';

export const Header = ({ changeTheme, theme }) => (
  <Container>
    <Content>
      <Link to="/">
        <H1>Where is the world?</H1>
      </Link>
      <DarkMode title="Dark Mode" onClick={() => changeTheme()}>
        {theme === 'light' && (<FontAwesomeIcon icon={faMoon} />)}
        {theme === 'dark' && (<FontAwesomeIcon icon={faMoonSolid} />)}
        <span>Dark Mode</span>
      </DarkMode>
    </Content>
  </Container>
);

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Header;

const Container = styled.header`
  background-color: ${(p) => color('white', p.theme.name)};
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
  color: ${(p) => color('secondary', p.theme.name)};
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
