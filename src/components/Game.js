import React from 'react'

import Tile from './Tile.js'
import TileLanding from './TileLanding.js'

import '../css/Game.css'

class Game extends React.Component {

  state={
    tileXY: [0, 0],
    tileLandingColors: [
      'grey',
      'grey',
      'grey'
    ],
    tileLandingBorders: [
      'none',
      'none',
      'none'
    ]
  }

  handleDrag = (e, ui) => {
    const border = '1.5px solid blue'
    const color = 'lightblue'
    const landingBorders = ['none', 'none', 'none']
    const landingColors = ['grey', 'grey', 'grey']
    const tilePOS = this.state.tileXY
    const x =  ui.x
    const y = ui.y
    tilePOS[0] = x
    tilePOS[1] = y
    if (x >= 10 && x <= 15 && y >= 10 && y <= 15) {
      landingBorders[0] = border
      landingColors[0] = color
    } 
    if (x >= 10 && x <= 15 && y >= 60 && y <= 65) {
      landingBorders[1] = border
      landingColors[1] = color
    } 
    if (x >= 10 && x <= 15 && y >= 110 && y <= 115) {
      landingBorders[2] = border
      landingColors[2] = color
    } 
    this.setState({
      tileXY: tilePOS,
      tileLandingBorders: landingBorders,
      tileLandingColors: landingColors
    })
  }

  onStart = () => {
    const tilePOS = [0, 0]
    this.setState({
      tileXY: tilePOS
    })
  }

  onStop = () => {
    console.log("stopped!")
  }

 
  render () {
    return (
      <div className='game'>
        <Tile
          x={375}
          y={10}
          posX={this.state.tileXY[0]}
          posY={this.state.tileXY[1]}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <Tile
          x={375}
          y={60}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <TileLanding
          x={10}
          y={10}
          color={this.state.tileLandingColors[0]}
          border={this.state.tileLandingBorders[0]}
        />
        <TileLanding
          x={10}
          y={60}
          color={this.state.tileLandingColors[1]}
          border={this.state.tileLandingBorders[1]}
        />
        <TileLanding
          x={10}
          y={110}
          color={this.state.tileLandingColors[2]}
          border={this.state.tileLandingBorders[2]}
        />
      </div>
    )
  }
}

export default Game
