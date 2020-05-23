import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // Você também pode registrar o erro em um serviço de relatórios de erro
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    const { hasError } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    if (hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  props: PropTypes.shape({
    children: PropTypes.node,
  }).isRequired,
};

export default ErrorBoundary;
