import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Education = ({ education }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="DD-MM-YYYY">{edu.from}</Moment> -{' '}
        {edu.to === null ? ' ' : <Moment format="DD-MM-YYYY">{edu.to}</Moment>}
      </td>
      <td>
          <button className='btn btn-danger'>Delete</button>
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
};

export default Education;
