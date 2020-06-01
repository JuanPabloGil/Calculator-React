import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ name }) => (

  <div className="component-display">
    <button type="button">{name}</button>
  </div>
);


Button.propTypes = {
  name: PropTypes.string,
};
Button.defaultProps = {
  name: 'n/a',
};

export default Button;
