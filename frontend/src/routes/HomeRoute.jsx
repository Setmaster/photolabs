import React, {useContext} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import {ModalContext} from "../context/ModalContext";
import photos from "../mocks/photos";
import {ApplicationContext} from "../context/ApplicationContext";

const HomeRoute = () => {
    const { state: { isModalOpen } } = useContext(ApplicationContext);
  return (
    <div className="home-route">
      <TopNavigationBar/>
      <PhotoList photos={photos}/>
        {isModalOpen && <PhotoDetailsModal/>}
    </div>
  );
};

export default HomeRoute;
