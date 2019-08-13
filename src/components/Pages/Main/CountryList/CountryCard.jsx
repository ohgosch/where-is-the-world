import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { color } from '../../../../styles/colors';
import { CardTitle } from '../../../../styles/typography';

export const CountryCard = (props) => {
  const {
    image, title, population, region, capital, alpha3Code,
  } = props;

  function parseNumber(number) {
    return number.toLocaleString();
  }

  return (
    <Container as={Link} to={`/country/${alpha3Code}`}>
      <Image src={image} />
      <Content>
        <Title>{title}</Title>
        <Property>
          Population:
          <PropertyValue>{parseNumber(population)}</PropertyValue>
        </Property>
        <Property>
          Region:
          <PropertyValue>{region}</PropertyValue>
        </Property>
        <Property>
          Capital:
          <PropertyValue>{capital}</PropertyValue>
        </Property>
      </Content>
    </Container>
  );
};

CountryCard.propTypes = {
  image: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
  title: PropTypes.string,
  alpha3Code: PropTypes.string.isRequired,
};

CountryCard.defaultProps = {
  image: '',
  population: 0,
  region: '',
  capital: '',
  title: '',
};

const Container = styled.article`
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, .1);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  background-color: ${color('white')};
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled(CardTitle)`
  margin-bottom: 10px;
`;

const Property = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${color('country-infos')};
  display: block;
  margin-bottom: 5px;
`;

const PropertyValue = styled.span`
  font-weight: 300;

  &:before {
    content: ' ';
  }
`;

export default CountryCard;
