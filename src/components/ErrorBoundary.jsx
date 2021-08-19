import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import "../css/errorpages.scss";
import * as ROUTES from "../config/routes";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.props.error && this.props.error === true
      ? (this.state = { hasError: true })
      : (this.state = { hasError: false });
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      const condition = false;
      return (
        <section>
          {condition === true && <Redirect to={ROUTES.HOME} />}
          <h1>Internal error:</h1>
          <h2>Oops!! Something went wrong!!!!</h2>
          <Link to={ROUTES.HOME}>Navigate to Home</Link>
        </section>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
  error: PropTypes.bool,
};

export default ErrorBoundary;
