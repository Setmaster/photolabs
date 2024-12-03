import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({id, slug, title, onClick}) => {
    
  return (
    <div className="topic-list__item" onClick={()=>onClick(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
