import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../../../../styles/colors';

export const BorderCountries = ({ borderCountries }) => (
  <Container>
    <BorderCountriesTitle>Border Countries: </BorderCountriesTitle>
    <BorderCountriesList>
      {borderCountries.map(({ alpha3Code, name: borderName }) => (
        <BorderCountriesItem key={alpha3Code}>
          <BorderCountriesItemLink as={Link} to={`/country/${alpha3Code}`}>
            {borderName}
          </BorderCountriesItemLink>
        </BorderCountriesItem>
      ))}
    </BorderCountriesList>
  </Container>
);

BorderCountries.propTypes = {
  borderCountries: PropTypes.arrayOf(PropTypes.shape({
    alpha3Code: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
`;

const BorderCountriesTitle = styled.h3`
  font-size: 14px;
  margin-right: 10px;
  flex-shrink: 0;
`;

const BorderCountriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const BorderCountriesItem = styled.li``;

const BorderCountriesItemLink = styled.a`
  background-color: ${color('white')};
  display: inline-block;
  padding: 5px 20px;
  margin: 5px;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, .1);
  border-radius: 3px;
  font-size: 14px;
`;

export default BorderCountries;
