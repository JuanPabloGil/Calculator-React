import React from 'react';
import PropTypes from 'prop-types';
import '../style/button.css';


const Button = ({ name, styleClass }) => (

  <div className="component-display">
    <button className={styleClass} type="button">{name}</button>
  </div>
);


Button.propTypes = {
  name: PropTypes.string,
  styleClass: PropTypes.string,
};
Button.defaultProps = {
  name: 'n/a',
  styleClass: '',
};

export default Button;
