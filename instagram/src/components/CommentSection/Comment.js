import React from 'react';
import './Comment.css';

function Comment(props) {
  return (
    <div>
      {props.comments.map(comment => {
        return (
          <div className='comment-style'>

            <div className ='comment-username'>{props.username}</div>

            <div className='comment-text'>{props.text}</div>

          </div>
        );
      })}
    </div>
  );
}

export default Comment;
