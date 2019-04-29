import React from 'react';
import Comment from './Comment'

function CommentSection(props) {
    return (
      <div>
          <Comment data={props.data} />
      </div>
    );
  }


export default CommentSection;