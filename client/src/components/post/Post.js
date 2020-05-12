import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect }  from 'react-redux';
import { getPost } from '../../redux/post/post.action';

const Post = ({ getPost, match }) => {
    useEffect(() => {
        getPost(match.params.id)
    }, [getPost])
    return (
        <div>
            post
        </div>
    );
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post);