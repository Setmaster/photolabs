import React, {useContext} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import {ModalContext} from "../context/ModalContext";

const HomeRoute = () => {
    const {isModalOpen, toggleModal} = useContext(ModalContext);
  return (
    <div className="home-route">
      <TopNavigationBar/>
      <PhotoList/>
        {isModalOpen && <PhotoDetailsModal/>}
    </div>
  );
};

export default HomeRoute;
