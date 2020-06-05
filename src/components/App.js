import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import '../style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: null,
      operation: null,
    };
  }

  clickHandler = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {

    return (
      <div className="App">
        <Display result={this.state.total || '0'} />
        <ButtonPanel clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
