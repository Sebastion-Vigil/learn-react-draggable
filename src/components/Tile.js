import React from 'react'
import Draggable from 'react-draggable'

class Tile extends React.Component {
    render() {
        return(
            <Draggable
              defaultPosition={{
                  x: this.props.x,
                  y: this.props.y
              }}
              bounds='parent'
              onStart={this.props.onStart}
              onDrag={this.props.onDrag}
              onStop={this.props.onStop}
            >
                <div className='tile'> {this.props.posX} {this.props.posY}</div>     
            </Draggable>
        )
    }
}

export default Tile