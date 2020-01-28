import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [4, 1, 20, 10]}
  }

  updateArray = () => {
    setTimeout(() => {
      this.setState({ data: [5,4,30,1] })
      console.log("update array", this.state.data)
    }, 1000)
  }

  componentDidMount() {
    this.updateArray()
  }

  drawCanvas = () => {
    console.log("inside draw canvas", this.state.data)
    return (
      <Canvas data={this.state.data} />
    )
  }

  render() {
    console.log("rendering")
    return (
      <div className="App">
        <h1>Algorithms</h1>
        {this.drawCanvas()}
      </div>
    );
  }
}

export default App;
