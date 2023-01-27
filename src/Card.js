import React from 'react';
export default function Card(props) {
  return (
    <div>
      <div className="Card-Cointainer">
        <div class="Card-element-1">
          <img
            src={props.image}
            alt={props.alts}
            className="Img-Card CroppingType4"
          />
          <p className="Status-text">{props.Status}</p>
        </div>
        <div className="Card-element-2">
          <i className="fa-solid fa-star"></i>
          <p className="RatesNumber">{props.RatesNumber}</p>
          <p className="RatesQuantity">{props.RatesQuantity}</p>
          <p className="Country">{props.Country}</p>
        </div>
        <div class="Card-element-3">{props.Description}</div>
        <div class="Card-element-4">
          <p class="Price">{props.Price}</p>
          <p>/ person</p>
        </div>
      </div>
    </div>
  );
}
