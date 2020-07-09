import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SMALL } from 'logics/utils/responsive-size';
import { TickTimer } from 'logics/utils/tick-timer';
import { CountriesContext } from 'components/Contexts/CountriesContext';

import { Input } from './Input';
import { Select } from './Select';

const Tick = new TickTimer();

const stateTemplate = {
  country: '',
  region: '',
};

export class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...stateTemplate };
  }

  componentDidMount() {
    Tick.addCallback(() => this.contextUpdate());
  }

  changeCountry(country) {
    Tick.changed();

    this.setState((state) => ({
      ...state,
      country,
    }));
  }

  changeRegion(region) {
    Tick.changed();

    this.setState((state) => ({
      ...state,
      region,
    }));
  }

  contextUpdate() {
    const { updateFilter } = this.props;
    const { country, region } = this.state;

    updateFilter({ country, region });
  }

  render() {
    return (
      <Container>
        <Input onChange={({ target }) => this.changeCountry(target.value)} />
        <Select onChange={({ target }) => this.changeRegion(target.value)} />
      </Container>
    );
  }
}

Filter.contextType = CountriesContext;

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

const Container = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: 1fr auto;
  grid-gap: 40px;

  /* Small */
  @media (max-width: ${SMALL.MAX}) {
    grid-template-columns: 1fr;
  }
`;

export default Filter;
