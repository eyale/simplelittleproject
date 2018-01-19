import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Search from './Search.jsx';
import WeatherList from './WeatherList.jsx';

export default class Weather extends React.Component {
    render() {
        return (
            <div className="weather">
                <h1>Weather</h1>
                    <Search />
                    <WeatherList /> 
            </div>
        );
    }
}

