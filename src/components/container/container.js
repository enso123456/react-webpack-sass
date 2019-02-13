import React, { Fragment } from 'react';
import './grid.scss';

import Button from '../button/button';

export default ({ children, history }) => (
  <Fragment>
    <Button onClick={() => history.goBack()} />
    <div className="grid">
      {children}
    </div>
  </Fragment>
);