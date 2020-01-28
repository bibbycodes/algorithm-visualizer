import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    this.renderArray(this.props.data, ctx)
  }

  renderArray = (array, ctx) => {
    array.forEach((item, index) => {
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(index * 30, 0, 29, item)
    })
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={640} height={425} />
      </div>
    )
  }
}

export default Canvas
