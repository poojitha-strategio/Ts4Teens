import React, { useState } from 'react';

const Modal = ({ clothingInfo }) => {
  const [isModal, setIsModal] = useState(true);
  const closeModal = () => {
    setIsModal(!isModal);
  };
  return (
    <div className={isModal ? 'modal' : 'modal-off'}>
      <div className="inner-modal">
        <p className="closing-button" onClick={closeModal}>
          +
        </p>
        <img className="modal-clothing" src={clothingInfo.Image} />
        <div className="modal-Description">
          <p>{clothingInfo.clothing}</p>
          <p>{clothingInfo.price}</p>
        </div>
        <button className="add-cart" onClick={closeModal}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Modal;
