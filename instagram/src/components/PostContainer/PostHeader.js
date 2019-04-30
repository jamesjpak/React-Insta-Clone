import React from "react";
import './PostHeader.css';

function PostHeader(props) {
  return (
    <div className="post-header-style">
      <img className='post-header-profile' src={props.data.thumbnailUrl} />

      {props.data.username}
    </div>
  );
}

export default PostHeader;