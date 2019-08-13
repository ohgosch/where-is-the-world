import styled from 'styled-components';

import { SMALL, MEDIUM, LARGE } from '../../logics/responsive';

export const Wrap = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  /* Small */
  @media (max-width: ${SMALL.MAX}) {
    width: 90%;
    max-width: ${SMALL.MAX};
  }

  /* Medium */
  @media (min-width:${MEDIUM.MIN}) and (max-width: ${MEDIUM.MAX}) {
    width: 90%;
    max-width: ${MEDIUM.MAX};
  }

  /* Large */
  @media (min-width: ${LARGE.MIN}) {
    width: 88%;
    max-width: ${LARGE.MIN};
  }
`;
