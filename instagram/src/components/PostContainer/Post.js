import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import LikeSection from '../LikeSection/LikeSection';
import './Post.css';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <>

      <div>
        <PostHeader data={props.data} />
      </div>

      <div className='post-image-container'>
        <img src={props.data.imageUrl} alt='post-images' /> 
      </div>

        <div>
            <LikeSection data={props.data} />
        </div>

      <div>
        <CommentSection data={props.data} />
      </div>

      
    </>
  );
}

Post.propTypes = {
    data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};


export default Post;
