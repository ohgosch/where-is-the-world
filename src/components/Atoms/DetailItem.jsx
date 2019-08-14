import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../styles/colors';

export const DetailItem = ({ title, description }) => (
  <Container>
    <Title>{`${title}: `}</Title>
    <Description>{description}</Description>
  </Container>
);

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Container = styled.li``;

const Title = styled.span`
  font-weight: 900;
  font-size: 14px;
  color: ${(p) => color('country-infos', p.theme.name)};
  margin-bottom: 5px;
`;

const Description = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${(p) => color('country-infos-description', p.theme.name)};
  margin-bottom: 5px;
`;

export default DetailItem;
