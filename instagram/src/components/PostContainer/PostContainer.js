import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'


function PostContainer(props) {
      return (
        <div>
            <Post data={props.data} />

            <CommentSection data={props.data} />
        </div>
      );
    }

  
  export default PostContainer;