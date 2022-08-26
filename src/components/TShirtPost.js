import React, { useState } from 'react';
import Modal from './Modal';

const TShirtPost = ({ arrShirts, index }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div
      className="Post"
      onClick={() => {
        setIsModal(true);
      }}
      key={index}
    >
      {isModal && <Modal clothingInfo={arrShirts} />}
      <img className="Clothing" src={arrShirts.Image} />
      <div className="Description">
        <p>{arrShirts.clothing}</p>
        <p>{arrShirts.price}</p>
      </div>
    </div>
  );
};
export default TShirtPost;
