import styled from 'styled-components';

/**
 * @constant Container
 *
 * @type {div}
 * @return {style} css
 */
const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 20px 40px rgba(92, 95, 101, 0.15);
  padding: 30px;
  margin: 80px auto;

  /* style to h1 inside Container */
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  /* style to svg icon inside Container */
  svg {
    margin-right: 10px;
  }
`;

export default Container;
