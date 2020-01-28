import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [4, 1, 20, 10]}
  }

  render() {
    return (
      <div className="App">
        <h1>Algorithms</h1>
        <Canvas data={this.state.data} />
      </div>
    );
  }
}

export default App;
