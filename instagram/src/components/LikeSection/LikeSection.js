import React from "react";
import "./LikeSection.css";

function LikeSection(props) {
  return (
    <>
      <div className="button-layout">

        <div className="like-dm-buttons">
          <i className="far fa-heart" />
        </div>
        <div className="like-dm-buttons">
          <i className="far fa-comment" />
        </div>
      </div>

      <div className='likes-counter'>
        <p>777 likes</p>
      </div>
    </>
  );
}

export default LikeSection;
