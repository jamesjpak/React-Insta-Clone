import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

function CommentSection(props) {
    return (
      <div className='comment-section-style'>
          <Comment comments={props.data.comments} />
      </div>
    );
  }


export default CommentSection;