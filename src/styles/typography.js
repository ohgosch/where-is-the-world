import styled from 'styled-components';
import { color } from './colors';
import { SMALL } from '../logics/responsive';

export const H1 = styled.h1`
  color: ${color('text-dark')};
  font-weight: 900;
  font-size: 22px;

  /* Small */
  @media (max-width: ${SMALL.MAX}) {
    font-size: 18px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  color: ${color('country-title')};
`;

export const CountryName = styled.h2`
  font-size: 16px;
`;
