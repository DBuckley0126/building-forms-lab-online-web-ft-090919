// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  render() {
    return(
      <div>
        <input name="name" onChange={(event) => this.handleInputChange(event)} value={this.state.name}/>
        <input type="submit" onClick={this.handleSubmit}/>
      </div>
    )
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = () => {
    
    this.props.addBand(this.state)
  }
}

export default BandInput
