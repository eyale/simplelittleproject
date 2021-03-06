
import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chart from './Chart'
import { map } from 'lodash';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={Math.random()}>
        <td><i>{cityData.city.name}</i></td>
        <td><Chart data={temps} color={'purple'} units='C' /></td>
      </tr>
    )
  }

  render() {
    const tHeadNames = [ 'City', 'Temperature (C)']
    
    return (
      <table className='table'>
        <thead>
          <tr>
            {tHeadNames.map((el, idx) => <th key={idx}>{el}</th>)}
          </tr>
        </thead>
        <tbody>
              {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)