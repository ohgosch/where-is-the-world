import React from 'react';
import styled from 'styled-components';

import { CountryCard } from './CountryCard';
import { MEDIUM, LARGE } from '../../../../logics/utils/responsive-size';
import { getAll } from '../../../../logics/requests/country';

const stateTemplate = {
  countries: [],
};

export class CountryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...stateTemplate };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const response = await getAll();

    this.setState((state) => ({
      ...state,
      countries: response.data,
    }));
  }

  render() {
    const { countries } = this.state;

    return (
      <Container>
        {countries.map(({
          name, flag, population, region, capital, alpha3Code,
        }) => (
          <CountryCard
            title={name}
            image={flag}
            population={population}
            region={region}
            capital={capital}
            key={name}
            id={alpha3Code}
          />
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-top: 50px;

  /* Medium */
  @media (min-width:${MEDIUM.MIN}) and (max-width: ${MEDIUM.MAX}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  /* Large */
  @media (min-width: ${LARGE.MIN}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default CountryList;