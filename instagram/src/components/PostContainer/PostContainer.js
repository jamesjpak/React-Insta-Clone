import React from 'react';
import Post from './Post'
import './PostContainer.css'


function PostContainer(props) {
      return (
        <>
          <div className="post-container">
            <Post data={props.data} />
          </div>


        </>
      );
    }

  
  export default PostContainer;