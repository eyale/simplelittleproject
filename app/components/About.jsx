import React from 'react';
import { Link } from 'react-router';

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1 className="about__heading">About</h1>

                <div>
                    Welcome to the React Redux Fullstack Starter!
                    To help get you started, here is an overview of what's contained here 
                    (this information is also available at the 
                        <span>&nbsp;</span>
                    <a href="http://github.com/michaelcheng429/react-redux-fullstack-starter" target="_blank">
                        GitHub repository
                    </a> :
                </div>

                <h2 id="stack">Stack</h2>
                <h2 id="features">Features</h2>
            </div>
        );
    }
}
