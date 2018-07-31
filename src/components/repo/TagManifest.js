import React, {Fragment} from 'react';
import ReactJson from 'react-json-view';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import repoServices from '../../constants/services';

import {BreadCrumbs} from '../navigation';

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

    for (let i = 0; i < history.length; i++) {
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
      verticalAlign: 'middle'
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
        <BreadCrumbs crumbs={crumbs}/>
        <Typography variant="display1">
          Details for tag: <strong>{this.state.repoName}:{this.state.tagName}</strong>
        </Typography>
        <Table>
          <TableBody>
            <TableRow hover>
              <TableCell style={styles}>Name</TableCell>
              <TableCell style={styles}> : </TableCell>
              <TableCell style={styles}>{data.name}</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell style={styles}>Architecture</TableCell>
              <TableCell style={styles}> : </TableCell>
              <TableCell style={styles}>{data.architecture}</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell style={styles}>Tag</TableCell>
              <TableCell style={styles}> : </TableCell>
              <TableCell style={styles}>{data.tag}</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell style={styles}>Schema Version</TableCell>
              <TableCell style={styles}> : </TableCell>
              <TableCell style={styles}>{data.schemaVersion}</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell style={styles}>Layers</TableCell>
              <TableCell style={styles}> : </TableCell>
              <TableCell style={styles}>
                <ReactJson src={data.fsLayers}/>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell style={styles}>Signatures</TableCell>
              <TableCell style={styles}> : </TableCell>
              <TableCell style={styles}>
                <ReactJson src={data.signatures}/>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell style={styles}>History</TableCell>
              <TableCell style={styles}> : </TableCell>
              <TableCell style={styles}>
                <ReactJson src={this.getFormattedHistory(data.history)}/>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    );
  }
}

export default TagManifest;
