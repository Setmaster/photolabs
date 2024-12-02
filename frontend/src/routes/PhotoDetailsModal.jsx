import React, {useContext} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import {ModalContext} from "../context/ModalContext";
import PhotoList from "../components/PhotoList";
import {getSimilarPhotos} from "../lib/helpers";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = () => {
    const {photoDetails, toggleModal} = useContext(ModalContext);

    if (!photoDetails) return null; // prevent render if we don't have the details

    const {id, imageSource, username, city, country, profile} = photoDetails;
    
    // get similar photos which comes as an object of objects and convert to arrays of objs
    const similarPhotos = Object.values(getSimilarPhotos(id));
    
  return (
      <div className="photo-details-modal">
          <button className="photo-details-modal__close-button" onClick={toggleModal}>
              <img src={closeSymbol} alt="close symbol"/>
          </button>
          <div className="photo-details-modal__content">
              <div className="photo-details-modal__main-photo">
                  <PhotoFavButton className="photo-details-modal__fav-button" photoId={id}/>
                  <img className="photo-details-modal__image" src={imageSource} alt={`Photo by ${username}`}/>
                  <div className="photo-details-modal__photographer-details">
                      <img className="photo-details-modal__photographer-profile" src={profile}
                           alt={`${username}'s profile`}/>
                      <div className="photo-details-modal__photographer-info">
                          <div>{username}</div>
                          <div className="photo-details-modal__photographer-location">{city}, {country}</div>
                      </div>
                  </div>
              </div>
              <div className="photo-details-modal__similar-photos">
                  <h3 className="photo-details-modal__header">Similar Photos</h3>
                  <PhotoList photos={similarPhotos}/>
              </div>
          </div>
      </div>
  )
};

export default PhotoDetailsModal;
