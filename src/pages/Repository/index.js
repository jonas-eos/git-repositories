import React, { Component } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

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
   * @return {html}
   */
  render() {
    const { repository, issues, loading } = this.state;

    return <h1>Repository</h1>;
  }
}
