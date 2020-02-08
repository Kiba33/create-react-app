import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

import './NavMenu.css';

export default function NavMenu() {

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white mb-3" light>
                <Container>
                    <NavbarBrand tag={NavLink} to="/"><img src={logo} alt="logo" /><span>React-App</span></NavbarBrand>
                </Container>
            </Navbar>
        </header>
    );
}
