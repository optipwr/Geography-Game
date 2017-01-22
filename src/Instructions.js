import React, { Component } from 'react';
import { Link } from 'react-router'
import './css/index.css';
import $ from 'jquery';


class Instructions extends Component {
    render(){
        return (
        <div>
          <nav className="navbar navbar-inverse">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  <img src="https://www.globalbrigades.org/media/Globe.png"/>
                </a>
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="tab play-tab"><Link to="play" activeClassName="active">Play</Link></li>
                  <li className="tab instructions-tab"><Link to="/" activeClassName="active">Instructions</Link></li>
                  <li className="tab asia-mode-tab"><Link to="asia-mode" activeClassName="active">ASIA MODE YAY</Link></li>
                </ul>

                  <div className="navbar-header navbar-right">
                  </div>
              </div>
          </nav>
            <div>
              <h1 className="how-to-play">How to Play!</h1>
              <p id="gameInstructions">Geography Game will give you a question that pertains to a certain location within the United States.
              Use your advanced knowledge of our incredible country's geographical locations...(or google search if you wimp out). The answer is in the form of a marker hidden within a certain zoom level on the answer location. Good Luck!</p>
            </div>
            <div>
              <img id="globe" src="https://img.clipartfest.com/b2a8a03cbe92f5fd0b5a1cabf4b0b390_globe-world-clipart-earth-globe-clipart-vector_425-425.jpeg"/>
            </div>



          </div>

        )
    }

}
export default Instructions
