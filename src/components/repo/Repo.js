import React from 'react';

import repoServices from '../../constants/services';

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

    const el = this.getTagElements(this.state.data.tags);

    return (
      <div>
        <h2 className="title is-h2">repo: {this.state.repoName}</h2>
        <div>{el}</div>
      </div>
    );
  }

};

export default Repo;
