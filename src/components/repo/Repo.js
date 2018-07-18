import React from 'react';

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
        <h3 className="title is-h2">repo: {this.state.repoName}</h3>
        <table className="hover stack">
          <tbody>
            {el}
          </tbody>
        </table>
      </div>
    );
  }

};

export default Repo;
