import React from 'react';

import * as repoServices from '../../services/repoService';

import RepoTag from './RepoTag';

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
    let response = await repoServices.fetchRepoTags(this.state.repoName);

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

    return (
      <div>
        <h2>{this.state.repoName}</h2>

        <div>{el}</div>
      </div>
    );
  }

};

export default Repo;
