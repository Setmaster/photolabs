import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos}) => {
  
  // generate an array of PhotoListItems from photos
  const photoItems = photos.map((entry, index)=>{
    return (
        <PhotoListItem
            key={entry.id}
            id={entry.id}
            location={entry.location}
            imageSource={entry.urls.full}
            username={entry.user.username}
            profile={entry.user.profile}
        />
    );
  })
  
  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
