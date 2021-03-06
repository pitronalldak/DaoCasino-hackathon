import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BaseComponent from './components/base/component';

export const urls = {
  index: {
    path: '/'
  }
};

export default (
  <Route path={urls.index.path} component={BaseComponent}>
  </Route>
);
