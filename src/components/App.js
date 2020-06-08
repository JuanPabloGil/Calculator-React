import React, { Component } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import '../style/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calcState = calculate(this.state, buttonName);
    this.setState(
      calcState,
    );
  }

  render() {
    const { state: { total } } = this;
    return (
      <div className="App">
        <Display result={total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
