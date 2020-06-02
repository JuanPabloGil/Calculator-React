import React from 'react';
import Button from './button';
import '../style/buttonPanel.css';


const ButtonPanel = () => (

  <div className="ButtonPanel">
    <div>
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" styleClass="button-orange" />
    </div>
    <div>
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" styleClass="button-orange" />

    </div>
    <div>
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" styleClass="button-orange" />

    </div>
    <div>
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" styleClass="button-orange" />
    </div>
    <div>
      <Button name="0" styleClass="button-big" />
      <Button name="." />
      <Button name="=" styleClass="button-orange" />
    </div>
  </div>
);

export default ButtonPanel;
