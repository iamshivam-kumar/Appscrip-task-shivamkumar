// import {fiHeart} from "react-icons/fi";
// const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
//   return (
//     <>
//       <section className="card">
//         <img src={img} alt={title} className="card-img" />
//         <div className="card-details">
//           <h3 className="card-title">{title}</h3>
//           <section className="card-reviews">
//             {star} {star} {star} {star}
//             <span className="total-reviews">{reviews}</span>
//           </section>
//           <section className="card-price">
//             <div className="price">
//               <del>{prevPrice}</del> {newPrice}
//             </div>
//             <div className="heart">
//               <fiHeart className="heart-icon" />
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Card;
import React, { useState } from 'react';
import Heart from 'react-heart';
import './Card.css';

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [active, setActive] = useState(false);

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div style={{width:'2rem'}}>
            <Heart
              isActive={active}
              onClick={() => setActive(!active)}
              style={{ color: active ? 'red' : 'inherit' }}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
