import React from "react";
import './AddComment.css';


function AddComment(props) {
  return (
    <form onSubmit={props.addComment} className='add-comment-style'>
      <input 
      type='text'
      
      className='input-style' 

      placeholder="Add a comment..." 
      value={props.input}
      onChange={props.commentHandler}
      />
    </form>
  );
}

export default AddComment;

