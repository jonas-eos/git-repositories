import styled from 'styled-components';

/**
 * @constant Title
 *
 * @description
 * Title component
 *
 * @type {HTMLElement}
 * @param {boolean} props [error]
 * @return {style} css
 */
export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'blue' : '#ff6e22')};
  font-family: Arial, Helvetica, sans-serif;

  /* Style to small tag  */
  small {
    font-size: 14px;
    color: #333;
  }
`;
