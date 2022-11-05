import React from 'react';
import PropTypes from "prop-types";

Role.propTypes = {
  title: PropTypes.string,
  dates: PropTypes.string,
  description: PropTypes.element
}

function Role(props) {
  return (
      <React.Fragment>
        <div>
          <h5 style={{display: 'inline-block', margin: 0}}>{props.title}</h5>
          <small style={{display: 'inline-block'}}>{', ' + props.dates}</small>
        </div>
        {props.description}
      </React.Fragment>
  );
}

export default Role;
