import dotenv from 'dotenv';
import React, { Component, Fragment } from 'react';

import contexts from './constants/contexts';
import { ServiceContext } from './contexts';

import Routes from './Routes';
import { TopNavigation } from './components/navigation';

class App extends Component {
  constructor(props) {
    super(props);
    dotenv.config();
  }

  render() {
    return (
      <Fragment>
        <ServiceContext.Provider value={contexts}>
          <TopNavigation />
          <Routes />
        </ServiceContext.Provider>
      </Fragment>
    );
  }
}

export default App;
