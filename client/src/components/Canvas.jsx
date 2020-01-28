import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data : this.props.data}
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    this.setState({
      data : this.props.data,
      ctx : ctx
    })
    this.renderArray(this.props.data, ctx)
  }

  renderArray = (array, ctx) => {
    array.forEach((item, index) => {
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(index * 30, 0, 29, item)
    })
  }

  componentDidUpdate() {
    console.log("Canvas.componentDidUpdate state: ", this.state)
    console.log("Canvas.componentDidUpdate props: ", this.props)
    this.renderArray(this.props.data, this.state.ctx)
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
