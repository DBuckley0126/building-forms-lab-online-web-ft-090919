import React, { Component } from 'react'
import {addBand} from '../actions/bands'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import BandDisplay from '../components/BandDisplay'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <BandDisplay bands={this.props.bands}/>
      </div>
    )
  }
}

export default connect((state)=>({ bands: state.bands }), {addBand})(BandsContainer)
