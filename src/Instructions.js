import React, { Component } from 'react';
import { Link } from 'react-router'
import './css/index.css';
import {Navbar, NavItem, Nav} from 'react-bootstrap';



class Instructions extends Component {
    render(){
        return (
        <div>
          <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand className="nav-brand">
                        <a href="#"><img alt="globe" src={require('./Globe.png')} className="logo"/></a>
                        <span className="title"><Link to="/" activeClassName="active"></Link> Geography Game</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} className="nav-tab"><Link to="play" activeClassName="active">Play</Link></NavItem>
                    <NavItem eventKey={2} className="nav-tab"><Link to="/" activeClassName="active">Instructions</Link></NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#"></NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
              <h1 className="how-to-play">How to Play!</h1>
              <p id="gameInstructions">Geography Game will give you a question that pertains to a certain location within the United States.
              Use your advanced knowledge of our incredible country's geographical locations...(or google search if you wimp out). The answer is in the form of a marker hidden within a certain zoom level on the answer location. Good Luck!</p>
            </div>
            <div>
              <img alt="globe" id="globe" src="https://www.globalbrigades.org/media/Globe.png"/>
            </div>



          </div>

        )
    }

}
export default Instructions
