import React from 'react';
import PropTypes from 'prop-types';

import Pizza from 'components/Pizza';
import { singularOrPlural } from 'helpers/formatter';

import * as S from './style';

const PizzaSizeDetails = ({ details }) => (
  <S.PaperSizeDetails>
    <Pizza size={details.size} />
    <S.Divider />
    <S.SizeName>{ details.name }</S.SizeName>
    <S.SizeSlaces>
      { details.slices } { singularOrPlural(details.slices, 'fatia', 'fatias')}, {' '}
      { details.flavours } { singularOrPlural(details.flavours, 'sabor', 'sabores') }
    </S.SizeSlaces>
  </S.PaperSizeDetails>
);

PizzaSizeDetails.propTypes = {
  details: PropTypes.shape({
    size: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    slices: PropTypes.number.isRequired,
    flavours: PropTypes.number.isRequired,
  }).isRequired,
};

export default PizzaSizeDetails;
