import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-default" id="navbar">
                <div className="container-fluid">
                  <button type="button" className="btn btn-warning navbar-btn"><span class="glyphicon glyphicon-check"></span> Instructions</button>
                  <button type="button" className="btn btn-danger navbar-btn"><span class="glyphicon glyphicon-remove"></span> About</button>
                  <button type="button" className="btn btn-success navbar-btn"><span class="glyphicon glyphicon-ok"></span> ASIAN-MODE</button>
                    <div className="navbar-header">
                        <h1 className="title">Geography Game</h1>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
