import React from 'react';

import './card.scss';

export default ({ data: {
  Title,
  ImageURLs: { FullSize }
} }) => (
    <div className="card card__one">
      <figure className="card__img">
        <img src={FullSize} width="340" height="280" />
      </figure>
      <div className="card__desc">
        {Title}
      </div>
    </div>
  )