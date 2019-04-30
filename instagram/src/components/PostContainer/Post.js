import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import LikeSection from '../LikeSection/LikeSection';
import AddComment from '../AddComment/AddComment';
import './Post.css';


function Post(props) {
  return (
    <>

      <div>
        <PostHeader data={props.data} />
      </div>

      <div className='post-image-container'>
        <img src={props.data.imageUrl} /> 
      </div>

        <div>
            <LikeSection data={props.data} />
        </div>

      <div>
        <CommentSection data={props.data} />
      </div>

      <div>
          <AddComment />
      </div>

    </>
  );
}

export default Post;
