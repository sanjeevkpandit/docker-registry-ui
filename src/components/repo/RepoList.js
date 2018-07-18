import React, { Fragment } from 'react';

import repoServices from '../../constants/services';

import RepoListItem from './RepoListItem';
import { BreadCrumbs } from '../navigation';

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
    }

    return elements;
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    const els = this.getReposListElements(this.state.data);
    const crumbs = [
      {
        name: 'repos',
        route: '/repos'
      }
    ];

    return (
      <Fragment>
        <BreadCrumbs crumbs={crumbs} />
        <h3 className="title is-h2">List of repositories</h3>
        <table className="hover stack">
          <tbody>
            {els}
          </tbody>
        </table>
      </Fragment>
    );
  };
};

export default RepoList;
