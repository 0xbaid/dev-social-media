import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { getProfiles } from '../../redux/profile/profile.action';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [])
  return <div>Developers</div>;
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
