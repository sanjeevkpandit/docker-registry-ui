import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const TopNavigation = () => (
  <div className={styles.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Docker Registry UI
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default TopNavigation;
