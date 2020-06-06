import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

/**
 * Base Page Content
 * Structure to composite the page's content
 */
const PageContent = ({ title, children }) => (
  <S.Container>
    <S.WrapperTitle>
      <S.Title>{ title }</S.Title>
    </S.WrapperTitle>
    <S.WrapperContent>
      { children }
    </S.WrapperContent>
  </S.Container>
);

PageContent.defaultProps = {
  title: 'Some Title',
};

PageContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default PageContent;
