import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { addPost } from '../../redux/post/post.action';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({ text });
    setText('');
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1" onSubmit={(event) => handleSubmit(event)}>
        <textarea
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          cols="30"
          rows="5"
          placeholder="Create a post"
          required
        ></textarea>
        <input
          type="submit"
          className="btn btn-dark my-1"
          value="Submit"
        />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
