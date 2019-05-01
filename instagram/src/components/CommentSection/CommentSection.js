import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";
import AddComment from "../AddComment/AddComment";


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data.comments,
      commentInput: ''
    };
  }

  commentHandler = event => {
    this.setState({
      commentInput: event.target.value
    });
  };

  
  addComment = event => {
    event.preventDefault();

    this.setState( {
      comments:[...this.state.comments, { username: "anonymous", text: this.state.commentInput } ],
      commentInput:'' 
     });
  };

  render() {
    return (
    <>

      <div className="comment-section-style">
      {this.state.comments.map(element => <Comment comment={element} />)}
      </div>

      <div>
        <AddComment 
        addComment={this.addComment}
        comments={this.state.comments} 
        input={this.state.commentInput} 
        commentHandler={this.commentHandler} 
        />
      </div>
    </>

    )}
}

export default CommentSection;
