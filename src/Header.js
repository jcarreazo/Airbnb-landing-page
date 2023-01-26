import React from 'react';
const airbnb =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png';
const img1 =
  'https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const img2 =
  'https://images.pexels.com/photos/5648357/pexels-photo-5648357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const img3 =
  'https://images.pexels.com/photos/2927080/pexels-photo-2927080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const img4 =
  'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const img5 =
  'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const img6 =
  'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const img7 =
  'https://images.pexels.com/photos/3893546/pexels-photo-3893546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const img8 =
  'https://images.pexels.com/photos/1930364/pexels-photo-1930364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const img9 =
  'https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export default function Header() {
  return (
    <div>
      <div className="Title">
        <img src={airbnb} alt="airbnb-logo" className="airbnb" />
      </div>
      <div className="Main-Image">
        <div className="ImgSet-1">
          <img src={img1} alt="img-1" className="CroppingType1" />
          <img src={img2} alt="img-2" className="CroppingType1" />
        </div>
        <div className="ImgSet-2">
          <img src={img3} alt="img-3" className="CroppingType1" />
          <img src={img4} alt="img-4" className="CroppingType3" />
        </div>
        <div className="ImgSet-3">
          <img src={img5} alt="img-5" className="CroppingType1" />
          <img src={img6} alt="img-6" className="CroppingType1" />
        </div>
        <div className="ImgSet-4">
          <img src={img7} alt="img-7" className="CroppingType2" />
          <img src={img8} alt="img-8" className="CroppingType1" />
        </div>
        <div className="ImgSet-5">
          <img src={img9} alt="img-9" className="CroppingType1" />
        </div>
      </div>
      <div className="Main-Text"></div>
    </div>
  );
}
