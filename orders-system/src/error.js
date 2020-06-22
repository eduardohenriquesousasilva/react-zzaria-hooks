import { PureComponent } from 'react';
import PropType from 'prop-types';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('error getDerivedStateFromError:', error.message);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('error:', error);
    console.log('info:', info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return children(hasError);
  }
}

ErrorBoundary.propTypes = {
  children: PropType.func.isRequired,
};

export default ErrorBoundary;
