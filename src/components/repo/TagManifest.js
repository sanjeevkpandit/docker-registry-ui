import React from 'react';

import * as repoServices from '../../services/repoService';

import DetailsInTable from '../repo/DetailsInTable';

class TagManifest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: {},
      repoName: this.props.match.params.repoName,
      tagName: this.props.match.params.repoTag
    };
  }

  async componentWillMount() {
    let response = await repoServices.fetchTagManifest(this.state.repoName, this.state.tagName);

    this.setState({
      data: response,
      loading: false
    });
  }

  getElements(data) {
    return (
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td> : </td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Architecture</td>
            <td> : </td>
            <td>{data.architecture}</td>
          </tr>
          <tr>
            <td>Tag</td>
            <td> : </td>
            <td>{data.tag}</td>
          </tr>
          <tr>
            <td>Schema Version</td>
            <td> : </td>
            <td>{data.schemaVersion}</td>
          </tr>
          <tr>
            <td>Layers</td>
            <td> : </td>
            <td><DetailsInTable value={data.fsLayers} /></td>
          </tr>
          <tr>
            <td>History</td>
            <td> : </td>
            <td><DetailsInTable value={data.history} /></td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    const el = this.getElements(this.state.data);

    return (
      <div>{el}</div>
    );
  }
}

export default TagManifest;
