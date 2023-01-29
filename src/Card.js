import React from 'react';
export default function Card(props) {
  return (
    <div>
      <div className="Card-Cointainer">
        <div class="Card-element-1">
          <img
            src={props.item.image}
            alt={props.item.alts}
            className="Img-Card CroppingType4"
          />
          <p className="Status-text">{props.item.Status}</p>
        </div>
        <div className="Card-element-2">
          <i className="fa-solid fa-star"></i>
          <p className="RatesNumber">{props.item.RatesNumber}</p>
          <p className="RatesQuantity">{props.item.RatesQuantity}</p>
          <p className="Country">{props.item.Country}</p>
        </div>
        <div class="Card-element-3">{props.item.Description}</div>
        <div class="Card-element-4">
          <p class="Price">{props.item.Price}</p>
          <p>/ person</p>
        </div>
      </div>
    </div>
  );
}
