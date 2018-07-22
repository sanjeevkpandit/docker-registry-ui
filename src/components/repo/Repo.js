import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import repoServices from '../../constants/services';

import RepoTag from './RepoTag';
import { BreadCrumbs } from '../navigation';

class Repo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      repoName: props.match.params.repoName,
      data: []
    };
  }

  async componentWillMount() {
    let response = await repoServices.getRepoTags(this.state.repoName);

    this.setState({
      data: response,
      loading: false
    });
  }

  getTagElements(tags) {
    let repoTags = tags || [];
    let tagKeys = Object.keys(repoTags);

    let elements = tagKeys.map(key => {
      return (
        <RepoTag key={`tag-${key}`} value={repoTags[key]} repo={this.state.repoName} />
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

    const el = this.getTagElements(this.state.data.tags);
    const crumbs = [
      {
        name: 'repos',
        route: '/repos'
      },
      {
        name: this.state.repoName,
        route: '/repos/' + this.state.repoName
      }
    ];

    return (
      <div>
        <BreadCrumbs crumbs={crumbs} />
        <Typography variant="display1">
          Tags of repo: <strong>{this.state.repoName}</strong>
        </Typography>
        <List>
          {el}
        </List>
      </div>
    );
  }

};

export default Repo;
