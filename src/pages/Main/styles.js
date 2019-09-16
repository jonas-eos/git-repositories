import styled from 'styled-components';

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
 * @constant SubmitButton
 *
 * @type {button:submit}
 * @return {style} css
 */
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
