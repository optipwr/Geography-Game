import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/index.css';
import {Navbar, NavItem, Nav} from 'react-bootstrap';


class Navbar1 extends Component {
    render() {
        return (
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
                  <NavItem eventKey={1} href="#"><img id="dc" src="http://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt=""/>
                  </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navbar1;
