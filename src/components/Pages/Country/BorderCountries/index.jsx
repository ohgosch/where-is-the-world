import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BorderCountries = ({ borderCountries }) => (
  <Container>
    <BorderCountriesTitle>Border Countries: </BorderCountriesTitle>
    <BorderCountriesList>
      {borderCountries.map(({ alpha3Code, name: borderName }) => (
        <BorderCountriesItem key={alpha3Code} as={Link} to={`/country/${alpha3Code}`}>
          <BorderCountriesItemLink>
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

const Container = styled.div``;

const BorderCountriesTitle = styled.h3``;

const BorderCountriesList = styled.ul``;

const BorderCountriesItem = styled.li``;

const BorderCountriesItemLink = styled.a``;

export default BorderCountries;
