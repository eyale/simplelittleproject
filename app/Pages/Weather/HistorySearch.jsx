import React, { Component } from 'react'
import { connect } from 'react-redux'

class HistorySearch extends Component {
  render() {
    return (
      <div className="history-search"> 
        <ul>
          {
            this.props.cities.reverse().map((city, idx) => 
              <li key={idx}>{city.city.name}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cities: state.weather
  }
}

export default connect(mapStateToProps)(HistorySearch)