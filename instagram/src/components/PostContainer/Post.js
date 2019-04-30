import React from "react";
import CommentSection from '../CommentSection/CommentSection'
import PostHeader from './PostHeader'
import './Post.css'

function Post(props) {
  return (
    <div>

      <div>
        <PostHeader data={props.data} />
      </div>

      <div className='post-image-container'>
        <img src={props.data.imageUrl} /> 
      </div>

      <div>
        <CommentSection data={props.data} />
      </div>

    </div>
  );
}

export default Post;
