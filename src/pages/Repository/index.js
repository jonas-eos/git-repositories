import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Container from '../../components/Container';
import { Loading, Owner } from './styles';
import api from '../../services/api';

/**
 * Class representating the repository page
 * @extends Component
 */
export default class Repository extends Component {
  /**
   * Start repository, issues and loading state
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      repository: {},
      issues: [],
      loading: true,
    };
  }

  /**
   * Show the repository informations
   * The page will show only open issues, and 5 per page
   */
  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    // Get API datas with primise.all
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  /**
   * Render to HTML
   * As return, show the Owner Avatar img
   * The repository name
   * The repository description
   * @return {html}
   */
  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading>Loading</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Back to repositories</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
