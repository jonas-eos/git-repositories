import styled from 'styled-components';

/**
 * @const Loading
 *
 * @type {div}
 * @return {style} css
 */
export const Loading = styled.div`
  color: #fff;
  font-size: 3-px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

/**
 * @const Owner
 *
 * @type {header}
 * @return {style} css
 */
export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #ffb48f;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
