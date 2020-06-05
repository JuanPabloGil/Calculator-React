import React from 'react';
import PropTypes from 'prop-types';
import '../style/display.css';

const Display = props => (
  <div className="Display">
    <h1>
      {props.result}
    </h1>
  </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
};
export default Display;
