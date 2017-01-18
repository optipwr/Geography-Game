import React, { Component } from 'react';
import './css/App.css';
import MapController from './MapController.js';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <nav className="navbar navbar-default" id="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h1>Geography Game</h1>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <h1>Hello</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
