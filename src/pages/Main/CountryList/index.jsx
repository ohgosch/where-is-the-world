import React from 'react';
import styled from 'styled-components';

import { MEDIUM, LARGE } from 'logics/responsive-size';
import { getAll } from 'logics/requests/country';
import { filterByRegion, filterByName } from 'logics/filter-countries';
import { CountriesContext } from 'contexts/CountriesContext';

import { CountryCard } from './CountryCard';

const stateTemplate = {
  countries: [],
  countriesRequest: [],
};

export class CountryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...stateTemplate };

    this.filters = {
      country: '',
      region: '',
    };
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate() {
    const { country: newCountry, region: newRegion } = this.context;
    const { country: oldCountry, region: oldRegion } = this.filters;

    if (newCountry !== oldCountry || newRegion !== oldRegion) {
      this.filters = { ...this.context };
      this.filter();
    }
  }

  filter() {
    const { countriesRequest } = this.state;
    const { country, region } = this.context;
    let countries = filterByRegion(countriesRequest, region);
    countries = filterByName(countries, country);

    this.setState((state) => ({
      ...state,
      countries,
    }));
  }

  async fetch() {
    const response = await getAll();
    await this.setState((state) => ({
      ...state,
      countriesRequest: response.data,
    }));
    this.filter();
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

CountryList.contextType = CountriesContext;

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
