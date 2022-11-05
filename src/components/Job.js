import React from 'react';
import PropTypes from "prop-types";

Job.propTypes = {
  logo: PropTypes.element,
  company: PropTypes.string,
  roles: PropTypes.element
}

function Job(props) {
  return (
      <React.Fragment>
        {props.logo}
        <h4 style={{margin: 0}}>{props.company}</h4>
        {props.roles}
      </React.Fragment>
  );
}

export default Job;
