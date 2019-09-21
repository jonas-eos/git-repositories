import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';
import Container from '../../components/Container';
import { Loading, Owner, IssueList, IssueFilter } from './styles';

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
      filters: [
        { state: 'all', label: 'All', active: true },
        { state: 'open', label: 'Open', active: false },
        { state: 'closed', label: 'Closed', active: false },
      ],
    };
  }

  /**
   * Show the repository informations
   * The page will show only open issues, and 5 per page
   */
  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    // Get API datas with promise.all
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
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
   * Show first 5 issues with filter option passed as param
   *
   * @param {String} filter
   */
  loadIssues = async filter => {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: String(filter),
        per_page: 5,
      },
    });
    this.setState({ issues: response.data });
  };

  /**
   * On select change, call loadIssues passing the option target value
   * @param {HTMLelement} e
   */
  handleSelectChange = e => {
    this.loadIssues(`${e.target.value}`);
  };

  /**
   * Render to HTML
   * As return, show the Owner Avatar img
   * The repository name
   * The repository description
   * @return {html}
   */
  render() {
    const { repository, issues, loading, filters } = this.state;

    if (loading) {
      return <Loading>Loading</Loading>;
    }

    return (
      // Show Owner information
      <Container>
        <Owner>
          <Link to="/">Back to repositories</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        {/* Show issues list */}
        <IssueList>
          <IssueFilter onChange={this.handleSelectChange}>
            {filters.map(filter => (
              <option value={String(filter.state)}>{filter.label}</option>
            ))}
          </IssueFilter>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
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
