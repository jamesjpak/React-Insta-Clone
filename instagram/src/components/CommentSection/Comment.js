import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return (
          <div className='comment-style'>

            <div className ='comment-username'>{comment.username}</div>

            <div className='comment-text'>{comment.text}</div>

          </div>
        );
      })}
    </div>
  );
}

export default Comment;
