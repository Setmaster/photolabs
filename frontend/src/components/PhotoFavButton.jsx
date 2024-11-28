import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = useCallback(() => {
        // toggle the selected state
        setIsSelected((prevSelected) => !prevSelected);
    }, []);
    
  return (
      <div className="photo-list__fav-icon" onClick={handleClick}>
          <FavIcon className="photo-list__fav-icon" displayAlert={false} selected={isSelected}/>
      </div>
  );
}

export default PhotoFavButton;