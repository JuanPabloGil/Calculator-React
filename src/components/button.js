import React from 'react';
import PropTypes from 'prop-types';
import '../style/button.css';

class Button extends React.Component {
  constructor(prop) {
    super(prop);
    Button.propTypes = {
      name: PropTypes.string,
      orange: PropTypes.bool,
      wide: PropTypes.bool,
    };
    Button.defaultProps = {
      name: 'n/a',
      orange: true,
      wide: false,
    };
  }

  render() {
    const properties = this.props;
    const className = [
      'component-button',
      properties.orange ? 'orange' : '',
      properties.wide ? 'wide' : '',
    ];

    return (
      <div className={className.join(' ').trim()}>
        <button type="button">{properties.name}</button>
      </div>
    );
  }
}

export default Button;
