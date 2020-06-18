import React from 'react';
import PropTypes from 'prop-types';
import '../style/button.css';

const Button = ({
  name, orange, wide, handleClick,
}) => {
  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
  ];
  return (
    <div className={className.join(' ').trim()}>
      <button type="button" onClick={() => handleClick(name)}>{name}</button>
    </div>
  );
};


Button.propTypes = {
  name: PropTypes.string.isRequired,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  orange: false,
  wide: false,
  handleClick: e => e.target,
};

export default Button;
