import React from 'react';

// import { Container } from './styles';

/**
 * Repository Function
 * @return {html} Repository Page
 */
export default function Repository({ match }) {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
