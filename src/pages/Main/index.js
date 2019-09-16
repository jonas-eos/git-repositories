import React from 'react';

import { Title } from './styles';

/**
 * Main function
 * @return {html} Main page
 */
export default function Main() {
  return (
    <>
      <Title>
        Main
        <small>Small</small>
      </Title>
      <Title error>Error</Title>
    </>
  );
}
