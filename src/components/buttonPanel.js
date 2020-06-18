import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import '../style/buttonPanel.css';

const ButtonPanel = ({ clickHandler }) => (
  <div className="component-button-panel">
    <div>
      <Button name="AC" handleClick={clickHandler} />
      <Button name="+/-" handleClick={clickHandler} />
      <Button name="%" handleClick={clickHandler} />
      <Button name="÷" handleClick={clickHandler} orange />
    </div>
    <div>
      <Button name="7" handleClick={clickHandler} />
      <Button name="8" handleClick={clickHandler} />
      <Button name="9" handleClick={clickHandler} />
      <Button name="X" handleClick={clickHandler} orange />
    </div>
    <div>
      <Button name="4" handleClick={clickHandler} />
      <Button name="5" handleClick={clickHandler} />
      <Button name="6" handleClick={clickHandler} />
      <Button name="-" handleClick={clickHandler} orange />
    </div>
    <div>
      <Button name="1" handleClick={clickHandler} />
      <Button name="2" handleClick={clickHandler} />
      <Button name="3" handleClick={clickHandler} />
      <Button name="+" handleClick={clickHandler} orange />
    </div>
    <div>
      <Button name="0" handleClick={clickHandler} wide />
      <Button name="." handleClick={clickHandler} />
      <Button name="=" handleClick={clickHandler} orange />
    </div>
  </div>
);
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: () => {},
};
export default ButtonPanel;
