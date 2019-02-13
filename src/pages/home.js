import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

export default () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-xs-12 portal animal-bg">
            <Link to="/animals">Animals</Link>
          </div>
          <div className="col-lg-6 col-xs-12 portal vegies-bg">
            <Link to="/vegies">Vegies</Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
};