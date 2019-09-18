import styled, { keyframes, css } from 'styled-components';

/**
 * @constant Container
 *
 * @type {div}
 * @return {style} css
 */
export const Container = styled.div`
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

/**
 * @constant Form
 *
 * @type {form}
 * @return {style} css
 */
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  /* input inside Form */
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

/**
 * A trigger to rotate the loading icon, this cause an effect like loading
 * circle.
 *
 * @constant rotate
 *
 * @type {keyframes}
 */
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
  `;

/**
 * @constant SubmitButton
 *
 * @type {button:submit}
 * @type {disabled} props.loading
 * @return {style} css
 */
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  /**
  * If the button are disabled, change cursor access permission and change
  * button status as a disabled color opacity
  */
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Check if the button are on loading status and activate rotate event on
  * icon
  */
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

/**
 * @const List
 *
 * @type {ul}
 * @return {style} css
 */
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* Add a border line in the next item on the list */
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #ffb48f;
      text-decoration: none;
    }
  }
`;
