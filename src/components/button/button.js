import React from 'react';

import './button.scss';

const Button = ({ onClick }) => (
  <a
    className="btn"
    onClick={onClick}
  ><i className="fas fa-arrow-left"></i>&nbsp;<span>Back</span></a>
);

export default Button;