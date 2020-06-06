import React from 'react';
import PropType from 'prop-types';

import * as S from './style';

/**
 * Pizza component
 */
const Pizza = ({ size }) => (
  <S.Pizza>
    <S.Label>
      { size }cm
    </S.Label>
  </S.Pizza>
);

Pizza.propTypes = {
  size: PropType.number.isRequired,
};

export default Pizza;
