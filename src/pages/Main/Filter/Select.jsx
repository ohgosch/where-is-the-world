import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Input as InputStyle } from 'visual/styles/Input';
import { color } from 'visual/colors';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const Select = ({ onChange }) => (
  <Container>
    <IconWrap>
      <FontAwesomeIcon icon={faChevronDown} />
    </IconWrap>
    <InputElement as="select" onChange={onChange}>
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option value={region} key={region}>{region}</option>
      ))}
    </InputElement>
  </Container>
);

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  max-width: 200px;
`;

const IconWrap = styled.div`
  position: absolute;
  right: 15px;
  color: ${(p) => color('placeholder', p.theme.name)};
  pointer-events: none;
  font-size: 12px;
`;

const InputElement = styled(InputStyle)`
  width: 100%;
  padding-right: 35px;
  -webkit-appearance: inherit;
`;

export default Select;
