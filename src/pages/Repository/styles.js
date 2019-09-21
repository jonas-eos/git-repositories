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

/**
 * @const IssueList
 *
 * @type {ul}
 * @return {style} css
 */
export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    } /* img */

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;
      } /* strong */

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #ffb48f;
        }
      } /* a */

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      } /* span */
    } /* div */

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    } /* p */
  } /*  li */
`;
export const IssueFilter = styled.select``;
