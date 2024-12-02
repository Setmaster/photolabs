import React, {useContext} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import {ModalContext} from "../context/ModalContext";

const PhotoDetailsModal = () => {
    const {photoDetails, toggleModal} = useContext(ModalContext);

    if (!photoDetails) return null; // prevent render if we don't have the details

    const {imageSource, username, city, country, profile} = photoDetails;

    console.log(imageSource, username, city, country, profile);
    
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
