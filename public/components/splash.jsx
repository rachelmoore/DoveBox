import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash-container">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className="splash-content">
                     <h1>SPLASH</h1>
                </div>
                <div>fucking hello></div>
            </div>
        );
    }
}

export default Splash;