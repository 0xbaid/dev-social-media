import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../redux/profile/profile.action';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])
  
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
