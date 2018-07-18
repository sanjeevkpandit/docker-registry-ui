import React, { Component, Fragment } from 'react';

import Routes from './Routes';
import { TopNavigation } from './components/navigation';

class App extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <div className="container">
          <Routes />
        </div>
      </Fragment>
    );
  }
}

export default App;
