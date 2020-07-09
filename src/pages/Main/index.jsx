import React from 'react';
import styled from 'styled-components';

import { Wrap } from 'visual/styles/Wrap';
import { CountriesContext } from 'contexts/CountriesContext';

import { Filter } from './Filter';
import { CountryList } from './CountryList';

const stateTemplate = {
  filter: {
    country: '',
    region: '',
  },
};

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...stateTemplate };
  }

  updateFilter = (filter) => {
    this.setState((state) => ({
      ...state,
      filter,
    }));
  }

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <Wrap>
          <CountriesContext.Provider value={filter}>
            <Filter updateFilter={this.updateFilter} />
            <CountryList />
          </CountriesContext.Provider>
        </Wrap>
      </Container>
    );
  }
}

const Container = styled.div``;

export default Main;
