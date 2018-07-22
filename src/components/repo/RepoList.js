import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

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
        <Typography variant="display1">List of repositories</Typography>
        <List>
          {els}
        </List>
      </Fragment>
    );
  };
};

export default RepoList;
