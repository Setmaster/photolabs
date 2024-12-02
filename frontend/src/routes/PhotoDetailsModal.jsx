import React, {useContext} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import {ModalContext} from "../context/ModalContext";

const PhotoDetailsModal = () => {
    const {isModalOpen, toggleModal} = useContext(ModalContext);
    
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img
            src={closeSymbol}
            alt="close symbol"
            onClick={toggleModal}
        />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
