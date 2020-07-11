import React from 'react'
import Game from './Game.js'
import ReactCursorPosition from 'react-cursor-position'

import '../css/App.css'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <ReactCursorPosition>
          <Game />
        </ReactCursorPosition>
      </div>
    )
  }
}

export default App
