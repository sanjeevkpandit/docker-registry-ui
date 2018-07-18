import React, { Fragment } from 'react';
import ReactJson from 'react-json-view';

import repoServices from '../../constants/services';

import { BreadCrumbs } from '../navigation';

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
    let response = await repoServices.getTagManifest(this.state.repoName, this.state.tagName);

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

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    const data = this.state.data;
    const styles = {
      verticalAlign: 'top'
    };
    const crumbs = [
      {
        name: 'repos',
        route: '/repos'
      },
      {
        name: this.state.repoName,
        route: '/repos/' + this.state.repoName
      },
      {
        name: this.state.tagName,
        route: `/repos/${this.state.repoName}/${this.state.tagName}`
      }
    ];

    return (
      <Fragment>
        <BreadCrumbs crumbs={crumbs} />
        <h3 className="title is-h2">tag: {this.state.repoName}:{this.state.tagName}</h3>
        <div>
          <table className="hover stack">
            <tbody>
              <tr>
                <td style={styles}>Name</td>
                <td style={styles}> : </td>
                <td style={styles}>{data.name}</td>
              </tr>
              <tr>
                <td style={styles}>Architecture</td>
                <td style={styles}> : </td>
                <td style={styles}>{data.architecture}</td>
              </tr>
              <tr>
                <td style={styles}>Tag</td>
                <td style={styles}> : </td>
                <td style={styles}>{data.tag}</td>
              </tr>
              <tr>
                <td style={styles}>Schema Version</td>
                <td style={styles}> : </td>
                <td style={styles}>{data.schemaVersion}</td>
              </tr>
              <tr>
                <td style={styles}>Layers</td>
                <td style={styles}> : </td>
                <td style={styles}>
                  <ReactJson src={data.fsLayers} />
                </td>
              </tr>
              <tr>
                <td style={styles}>Signatures</td>
                <td style={styles}> : </td>
                <td style={styles}>
                  <ReactJson src={data.signatures} />
                </td>
              </tr>
              <tr>
                <td style={styles}>History</td>
                <td style={styles}> : </td>
                <td style={styles}>
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
