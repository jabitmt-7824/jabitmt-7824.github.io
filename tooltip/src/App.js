import React from 'react';
import ToolTip from './ToolTip';

class App extends React.Component {

  // App Constructor
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      pos: 'top'
    }
  }

  // function for changing pos value in state according to dropdown list
  handleChange = (e) => {
    this.setState({
      pos: e.target.value
    })
  }

  render() {
    return (
      <div>
        <label>
          Pick the position:
          {/* dropdown list */}
          <select value={this.state.value} onChange={this.handleChange} >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
          {/* toolTip Component */}
          <ToolTip position={this.state.pos} />
        </label>
      </div>
    )
  }
}

export default App;