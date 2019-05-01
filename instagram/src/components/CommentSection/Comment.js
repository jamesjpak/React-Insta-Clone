import React from 'react';
import './Comment.css';


const Comment = props => {
        return (
          <div className='comment-style'>

            <div className ='comment-username'>{props.comment.username}</div>

            <div className='comment-text'>{props.comment.text}</div>

          </div>
        );
}

export default Comment;
