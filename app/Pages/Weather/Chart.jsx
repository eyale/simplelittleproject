import React, { Component } from 'react'
import {round, sum} from 'lodash'

function average(data) {
  return round(sum(data)/data.length)
}

export default class Chart extends Component {

  render() {
    const {data, color, units} = this.props
    return (
      <div>
        <div><i>{average(data)} {units}</i></div>
      </div>
    )
  }
}