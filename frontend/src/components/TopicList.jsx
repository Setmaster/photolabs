import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topicData, onTopicClick}) => {
  const topics = topicData.map((entry)=>{
    return (
        <TopicListItem
        key={entry.id}
        id={entry.id}
        slug={entry.slug}
        title={entry.title}
        onClick={onTopicClick}
        />
    );
  });
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;
