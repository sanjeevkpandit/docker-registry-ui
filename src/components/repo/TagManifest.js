import React, { Fragment } from 'react';
import ReactJson from 'react-json-view';

import * as repoServices from '../../services/repoService';

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

  getFormattedHistory(history) {
    let hist = [];

    for(let i = 0; i < history.length; i++) {
      history[i]['v1Compatibility'] = JSON.parse(history[i]['v1Compatibility']);
      hist.push(history[i]);
    }

    return hist;
  }

  getElements(data) {
    return (
      <table className="table is-striped is-hoverable">
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
            <td>
              <ReactJson src={data.fsLayers} />
            </td>
          </tr>
          <tr>
            <td>Signatures</td>
            <td> : </td>
            <td>
              <ReactJson src={data.signatures} />
            </td>
          </tr>
          <tr>
            <td>History</td>
            <td> : </td>
            <td>
              <ReactJson src={this.getFormattedHistory(data.history)} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    const data = this.state.data;

    return (
      <Fragment>
        <h2 className="title is-h2">tag: {this.state.repoName}:{this.state.tagName}</h2>
        <div>
          <table className="table is-striped is-hoverable">
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
                <td>
                  <ReactJson src={data.fsLayers} />
                </td>
              </tr>
              <tr>
                <td>Signatures</td>
                <td> : </td>
                <td>
                  <ReactJson src={data.signatures} />
                </td>
              </tr>
              <tr>
                <td>History</td>
                <td> : </td>
                <td>
                  <ReactJson src={this.getFormattedHistory(data.history)} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default TagManifest;
