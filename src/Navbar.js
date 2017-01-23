import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/index.css';
import $ from 'jquery';
import {Navbar, NavItem, MenuItem, NavDropdown, NavbarCollapse, NavbarBrand, NavbarHeader, Nav} from 'react-bootstrap';


class Navbar1 extends Component {
    render() {
        return (
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
        )
    }
}

export default Navbar1;
