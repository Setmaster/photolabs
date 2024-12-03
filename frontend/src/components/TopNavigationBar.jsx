import React, {useContext} from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import {ApplicationContext} from "../context/ApplicationContext";

const TopNavigation = ({topicData}) => {
  const { fetchPhotosByTopic } = useContext(ApplicationContext);

  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  const handleLogoClick = () => {
    fetchPhotosByTopic(null);
  };
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleLogoClick}>PhotoLabs</span>
        <TopicList topicData={topicData} onTopicClick={handleTopicClick}/>
        <FavBadge/>
    </div>
  )
}

export default TopNavigation;