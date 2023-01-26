import React from 'react';
var random = Math.floor(Math.random() * 1000);
`https://picsum.photos/id/${random}`;
console.log();
console.log(reponse);
export default function Card(props) {
  return (
    <div>
      <div className="Card-Cointainer">
        <div class="Card-element-1">
          <img src={props.url} alt={props.alts} className="Img-Card" />
          <p className="Status-text"></p>
        </div>
        <div class="Card-element-2">
          <i class="fa-solid fa-star-sharp"></i>
          {props.RatesNumber}
          {props.RatesQuantity}
          {props.Country}
        </div>
        <div class="Card-element-3">{props.Description}</div>
        <div class="Card-element-4">{props.Price}</div>
      </div>
    </div>
  );
}
