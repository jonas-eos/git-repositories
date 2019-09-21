import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';
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
      error: null,
    };
  }

  /**
   * Load data from localStorage and show in webpage
   */
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  /**
   * Save to the localStorage a the repositry sended via input.
   *
   * @param {object} prevState.repositories
   */
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  /**
   * Set a value to newRepo on event change
   * @param {event} e
   */
  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, error: null });
  };

  /**
   * Change the loading status to true and consume the API with newRepo content
   * As a API return, get the full_name respository from git and store in
   * repositories states, after that, finish the loading status.
   * @param {event} e
   */
  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
      });
    } catch (error) {
      this.setState({ error: true });
      alert(error); // eslint-disable-line no-alert
    } finally {
      this.setState({
        newRepo: '',
        loading: false,
      });
    }
  };

  /**
   * Render to html
   * @return {html}
   */
  render() {
    const { newRepo, repositories, loading, error } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        {/* On submit event, the form call the handleSubmit event */}
        <Form onSubmit={this.handleSubmit} error={error}>
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

        {/* List of all repositories in state */}
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Details
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
