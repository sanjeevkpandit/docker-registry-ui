import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import ROUTES from './constants/routes';

import { Repo, RepoList, TagManifest } from './components/repo';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={RepoList} />
      <Route exact path={ROUTES.REPOS} component={RepoList} />
      <Route exact path={ROUTES.RERPOS_ONE} component={Repo} />
      <Route exact path={ROUTES.TAG_MANIFEST} component={TagManifest} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
