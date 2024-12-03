import React, {useContext} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import {ApplicationContext} from "../context/ApplicationContext";

const HomeRoute = () => {
    const {state: {isModalOpen, photoData, topicData}} = useContext(ApplicationContext);
    console.log("topics data", topicData)
    return (
        <div className="home-route">
            <TopNavigationBar topicData={topicData}/>
            <PhotoList photos={photoData}/>
            {isModalOpen && <PhotoDetailsModal/>}
        </div>
    );
};

export default HomeRoute;
