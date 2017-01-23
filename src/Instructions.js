import React, { Component } from 'react';
import { Link } from 'react-router'
import './css/index.css';
import $ from 'jquery';
import {Navbar, NavItem, MenuItem, NavDropdown, NavbarCollapse, NavbarBrand, NavbarHeader, Nav} from 'react-bootstrap';



class Instructions extends Component {
    render(){
        return (
        <div>
          <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#"><img src="https://www.globalbrigades.org/media/Globe.png" className="logo"/></a>
                      <a href="#"><Link to="/" activeClassName="active"></Link> Geography Game</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
              <Nav>
                  <NavItem eventKey={1} href="#"><Link to="play" activeClassName="active">Play</Link></NavItem>
                  <NavItem eventKey={2} href="#"><Link to="/" activeClassName="active">Instructions</Link></NavItem>
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
              <img id="globe" src="https://img.clipartfest.com/b2a8a03cbe92f5fd0b5a1cabf4b0b390_globe-world-clipart-earth-globe-clipart-vector_425-425.jpeg"/>
            </div>



          </div>

        )
    }

}
export default Instructions
