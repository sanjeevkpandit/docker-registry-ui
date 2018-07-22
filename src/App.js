import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Routes from './Routes';
import { TopNavigation } from './components/navigation';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Routes />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
