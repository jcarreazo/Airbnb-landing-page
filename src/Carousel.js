import React from 'react';
import Card from './Card.js';
export default function Carousel() {
  return (
    <div>
      <div className="Main">
        <div className="Main-Features-1">
          <Card
            Status="SOLD OUT"
            RatesNumber="4.5"
            RatesQuantity="(2501)"
            Country="-East Europe"
            alts="feature1"
            Description="Life lessons with Katie Zaferes"
            Price="From $136"
          />
        </div>
      </div>
    </div>
  );
}
