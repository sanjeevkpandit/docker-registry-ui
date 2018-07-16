import React, { Fragment } from 'react';

import * as repoServices from '../../services/repoService';

import RepoListItem from './RepoListItem';

class RepoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: {}
    };
  }

  async componentWillMount() {
    let response = await repoServices.fetchAllRepos();

    this.setState({
      data: response,
      loading: false
    });
  }

  getReposListElements(data) {
    let repos = data.repositories || {};
    let repoKeys = Object.keys(repos);

    let elements = repoKeys.map(key => {
      return (
        <RepoListItem key={`repo-${key}`} value={repos[key]} />
      )
    });

    if (!elements.length) {
      return (
        <div>No repos found.</div>
      );
    }

    return elements;
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    let els = this.getReposListElements(this.state.data);

    return (
      <Fragment>
        <h1>List of respos</h1>
        <div>{els}</div>
      </Fragment>
    );
  };
};

export default RepoList;
