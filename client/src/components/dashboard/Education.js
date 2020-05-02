import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

//Redux
import { connect } from 'react-redux';
import { deleteEducation } from '../../redux/profile/profile.action';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="DD-MM-YYYY">{edu.from}</Moment> -{' '}
        {edu.to === null ? ' ' : <Moment format="DD-MM-YYYY">{edu.to}</Moment>}
      </td>
      <td>
          <button className='btn btn-danger' onClick={() => deleteEducation(edu._id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h1 className="my-2"> Education Credentials</h1>
      <table className="table">
        <thead>
          <tr>
            <th>College</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
