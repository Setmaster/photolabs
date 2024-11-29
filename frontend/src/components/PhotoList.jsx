import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";

const PhotoList = () => {
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
