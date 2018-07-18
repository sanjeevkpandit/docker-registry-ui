import React, { Fragment } from 'react';

import repoServices from '../../constants/services';

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
    let response = await repoServices.getAllRepos();

    this.setState({
      data: response,
      loading: false
    });
  }

  getReposListElements(data) {
    let repos = data || [];
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
    } else {
      elements = (
        <ul className="menu-list">
          {elements}
        </ul>
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
        <h2 className="title is-h2">List of repos</h2>
        <div>{els}</div>
      </Fragment>
    );
  };
};

export default RepoList;
