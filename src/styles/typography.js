import styled from 'styled-components';

import { SMALL } from 'logics/utils/responsive-size';

import { color } from './colors';

export const H1 = styled.h1`
  color: ${(p) => color('text-dark', p.theme.name)};
  font-weight: 900;
  font-size: 22px;

  /* Small */
  @media (max-width: ${SMALL.MAX}) {
    font-size: 18px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  color: ${(p) => color('country-title', p.theme.name)};
`;

export const CountryName = styled.h2`
  font-size: 16px;
`;
