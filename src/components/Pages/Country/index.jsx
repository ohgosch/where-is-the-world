import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { getConutry, getByCodes } from '../../../logics/requests/country';
import { Wrap } from '../../../styles/Atoms/Wrap';
import { color } from '../../../styles/colors';
import { DetailItem } from '../../Atoms/DetailItem';
import { BorderCountries } from './BorderCountries';

const stateTemplate = {
  country: {},
  borderCountries: [],
  ready: false,
};

function getNameString(list) {
  return list.map((current) => current.name).join(', ');
}

export class Country extends React.Component {
  state = { ...stateTemplate }

  componentDidMount() {
    this.fetchCountry();
  }

  async fetchCountry() {
    const { match: { params } } = this.props;
    const { id } = params;

    const { data } = await getConutry(id);
    const { borders } = data;

    this.setState((state) => ({
      ...state,
      country: data,
      ready: true,
    }));

    this.fetchBorderCountries(borders.filter((border, index) => index < 3));
  }

  async fetchBorderCountries(borders) {
    if (!borders.length) return;

    const { data: borderCountries } = await getByCodes(borders);

    this.setState((state) => ({
      ...state,
      borderCountries,
    }));
  }

  render() {
    const { country, ready, borderCountries } = this.state;
    const {
      flag, name, nativeName, population, region, subregion,
      capital, topLevelDomain, currencies, languages,
    } = country;

    return (
      <Container>
        <Wrap>
          <Back as={Link} to="/">
            <IconWrap>
              <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </IconWrap>
            Back
          </Back>
          {ready && (
            <Content>
              <FlagSide>
                <Image src={flag} alt="" />
              </FlagSide>
              <InfoSide>
                <InfoSideWrap>
                  <Title>{name}</Title>
                  <DetailList>
                    {nativeName && (
                      <DetailItem title="Native Name" description={nativeName} />
                    )}
                    {population && (
                      <DetailItem title="Population" description={population.toLocaleString()} />
                    )}
                    {region && (
                      <DetailItem title="Region" description={region} />
                    )}
                    {subregion && (
                      <DetailItem title="Sub Region" description={subregion} />
                    )}
                    {capital && (
                      <DetailItem title="Capital" description={capital} />
                    )}
                    {topLevelDomain.length && (
                      <DetailItem title="Top Level Domain" description={topLevelDomain[0]} />
                    )}
                    {currencies.length && (
                      <DetailItem title="Currencies" description={getNameString(currencies)} />
                    )}
                    {languages.length && (
                      <DetailItem title="Languages" description={getNameString(languages)} />
                    )}
                  </DetailList>
                  <BorderCountries borderCountries={borderCountries} />
                </InfoSideWrap>
              </InfoSide>
            </Content>
          )}
        </Wrap>
      </Container>
    );
  }
}

Country.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const Container = styled.div``;

const Back = styled.a`
  background-color: ${color('white')};
  border-radius: 4px;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, .1);
  padding: 7px 20px;
  font-size: 12px;
  display: inline-block;
`;

const IconWrap = styled.span`
  display: inline-block;
  margin-right: 7px;
`;

const Content = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
`;

const FlagSide = styled.div``;

const Image = styled.img`
  width: 100%;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, .1);
`;

const InfoSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-flow: column;
`;

const InfoSideWrap = styled.div``;

const Title = styled.h2`
  margin-bottom: 30px;
`;

const DetailList = styled.ul`
  column-count: 2;
  flex-basis: 100%;
`;

export default Country;
