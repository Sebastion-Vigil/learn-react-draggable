import React from 'react'
import Draggable from 'react-draggable'

import Tile from './Tile.js'

import '../css/Game.css'

class Game extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: 0,
      y: 0
    }
  }

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition
    console.log(ui.x, ui.y)
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    })
  }

  onStart = () => {
    console.log("started!")
    let newActiveDrags = this.state.activeDrags
    newActiveDrags += 1
    this.setState({
      activeDrags: newActiveDrags
    })
  }

  onStop = () => {
    console.log("stopped!")
    let newActiveDrags = this.state.activeDrags
    newActiveDrags -= 1
    this.setState({
      activeDrags: newActiveDrags
    })
  }

  // For controlled component
  adjustXPos = e => {
    e.preventDefault()
    e.stopPropagation()
    const { x, y } = this.state.controlledPosition
    this.setState({ controlledPosition: { x: x - 10, y } })
  }

  adjustYPos = e => {
    e.preventDefault()
    e.stopPropagation()
    const { controlledPosition } = this.state
    const { x, y } = controlledPosition
    this.setState({ controlledPosition: { x, y: y - 10 } })
  }

  onControlledDrag = (e, position) => {
    const { x, y } = position
    console.log(x, y)
    this.setState({ controlledPosition: { x, y } })
  }

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position)
    this.onStop()
  }
  render () {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop }
    const { deltaPosition, controlledPosition } = this.state
    return (
      <div className='game'>
        <Tile
          x={10}
          y={10}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        {/* <Draggable defaultPosition={{x: 10, y: 10}} bounds='parent' onDrag={this.handleDrag} {...dragHandlers}>
          <div className='tile'></div>
        </Draggable>
        <Draggable defaultPosition={{x: 10, y: 60}} bounds='parent' onDrag={this.handleDrag} {...dragHandlers}>
          <div className='tile'></div>
        </Draggable> */}
      </div>
    )
  }
}

export default Game
