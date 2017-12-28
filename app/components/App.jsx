import React from 'react';
import { Link } from 'react-router';

export default class AppView extends React.Component {
    render() {
        return (
            <div>
                <nav className="main-nav">
                    <Link className="main-nav__link" to="/">Home</Link>
                    <Link className="main-nav__link" to="about">About Me</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
