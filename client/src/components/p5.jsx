import React from 'react';
import '../p5/p5.js'

class P5 extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  setup() {
    createCanvas(640, 480);
  }

  draw() {
    ellipse(50, 50, 80, 80);
  }

  render() {
    return (
      <div>
        { this.setup() }
        { this.draw() }
        Hello
      </div>
    )
  }
}

export default P5