import React from 'react';
import Card from './Card.js';

import Data from './Data.js';
export default function Carousel() {
  const cards = Data().map((item) => {
    return <Card item={item} />;
  });
  return (
    <div>
      <div className="Main">
        <div className="Main-Features-1">{cards}</div>
      </div>
    </div>
  );
}
