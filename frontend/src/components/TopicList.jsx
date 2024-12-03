import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topicData}) => {
  const topics = topicData.map((entry)=>{
    return (
        <TopicListItem
        key={entry.id}
        slug={entry.slug}
        title={entry.title}
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
