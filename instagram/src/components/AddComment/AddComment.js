import React from "react";
import './AddComment.css';

function AddComment(props) {
  return (
    <div className='add-comment-style'>
      <input 
      className='input-style' 
      placeholder="Add a comment..." 
      value={props.data}
      onChange={props.handleChanges}
      />
    </div>
  );
}

export default AddComment;

