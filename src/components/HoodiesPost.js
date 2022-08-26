import React, { useState } from 'react';
import Modal from './Modal';

const HoodiesPost = ({ arrHoodies, index }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div
      className="Post"
      onClick={() => {
        setIsModal(true);
      }}
      key={index}
    >
      {isModal && <Modal clothingInfo={arrHoodies} />}
      <img className="Clothing" src={arrHoodies.Image} />
      <div className="Description">
        <p>{arrHoodies.clothing}</p>
        <p>{arrHoodies.price}</p>
      </div>
    </div>
  );
};
export default HoodiesPost;
