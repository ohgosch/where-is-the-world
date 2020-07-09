import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { color } from 'visual/colors';
import { CardTitle } from 'visual/typography';
import { DetailItem } from 'components/DetailItem';

export const CountryCard = (props) => {
  const {
    image, title, population, region, capital, id,
  } = props;

  return (
    <Container as={Link} to={`/country/${id}`}>
      <Image src={image} />
      <Content>
        <Title>{title}</Title>
        <DetailList>
          <DetailItem title="Population" description={population.toLocaleString()} />
          <DetailItem title="Region" description={region} />
          <DetailItem title="Capital" description={capital} />
        </DetailList>
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
  id: PropTypes.string.isRequired,
};

CountryCard.defaultProps = {
  image: '',
  population: 0,
  region: '',
  capital: '',
  title: '',
};

const Container = styled.a`
  background-color: ${(p) => color('white', p.theme.name)};
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, .1);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled(CardTitle)`
  margin-bottom: 10px;
`;

const DetailList = styled.ul``;

export default CountryCard;
