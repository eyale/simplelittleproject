import React from 'react';
import { Link } from 'react-router';

export default class AppView extends React.Component {
    render() {
        return (
            <div>
                <nav className="main-nav">
                    <div className='grid'>
                            <Link className="main-nav__link" to="/">Home</Link>
                            <Link className="main-nav__link" to="about">About Me</Link>
                            <Link className="main-nav__link" to="board">Board</Link>
                    </div>
                </nav>
                    {this.props.children}
            </div>
        );
    }
}
