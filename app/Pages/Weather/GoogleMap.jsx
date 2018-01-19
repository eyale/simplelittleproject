import React, { Component } from 'react'


export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 10,
      center: {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.lon)
      }
    })
  }

  render () {
    const style = {
      width: '200px',
      height: '100px'
    }
    return <div id='map' ref='map' style={style}></div>
  }
}
