import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-default" id="navbar">
                <div className="container-fluid">
                  <button type="button" className="btn btn-warning navbar-btn"><span className="glyphicon glyphicon-flag"></span> Instructions</button>
                  <button type="button" className="btn btn-danger navbar-btn"><span className="glyphicon glyphicon-user"></span> About</button>
                  <button type="button" className="btn btn-success navbar-btn"><span className="glyphicon glyphicon-plane"></span> ASIAN-MODE</button>
                    <div className="navbar-header">
                        <h1 className="title">Geography Game</h1>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
