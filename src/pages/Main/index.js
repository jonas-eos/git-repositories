import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';
import api from '../../services/api';

/**
 * Class representating the main page
 * @extends Component
 */
export default class Main extends Component {
  /**
   * Create a Main
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false,
    };
  }

  /**
   * Set a value to newRepo on event change
   * @param {event} e
   */
  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  /**
   * Change the loading status to true and consume the API with newRepo content
   * As a API return, get the full_name respository from git and store in
   * repositories states, after that, finish the loading status.
   * @param {event} e
   */
  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  /**
   * Render to html
   * @return {html}
   */
  render() {
    const { newRepo, loading } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        {/* On submit event, the form call the handleSubmit event */}
        <Form onSubmit={this.handleSubmit}>
          {/* On change event, the input call haldeInputChange */}
          <input
            type="text"
            value={newRepo}
            placeholder="Add repository"
            onChange={this.handleInputChange}
          />
          {/* If loading is true, show FaSpinner icon, else show FaPlus */}
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
