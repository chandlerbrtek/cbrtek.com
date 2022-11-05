import React from 'react';
import PropTypes from "prop-types";

JobLogo.propTypes = {
  image: PropTypes.element,
  company: PropTypes.string
}

function JobLogo(props) {
  return (
      <React.Fragment>
        <img style={{borderRadius: '15%'}} src={props.image} alt={props.company}/>
      </React.Fragment>
  );
}

export default JobLogo;
