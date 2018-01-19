import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <h1>
                🎉🌟😀 Wellcome! ✨🦆🎊 
                </h1>
                <Link to="board">to the board</Link>
            </div>
        );
    }
}

export default connect(undefined)(Home);
