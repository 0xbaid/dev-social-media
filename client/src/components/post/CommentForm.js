import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { addComment } from '../../redux/post/post.action';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(postId, { text });
    setText('');
  };
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave Commments</h3>
      </div>
      <form className="form my-1" onSubmit={(event) => handleSubmit(event)}>
        <textarea
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          cols="30"
          rows="5"
          placeholder="Leave a comment "
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
