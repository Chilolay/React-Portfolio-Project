import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import SearchBar from './SearchBar';
import './Nav.scss'

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <Navbar sticky="top" expand="md" className="mb-0 px-3 navbar-dark bg-primary">
        <NavbarBrand className="me-3" href="/">
          I Wet My Plants
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
              Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/careGuides">
              Care Guides
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/articles">
              Articles
              </NavLink>
            </NavItem>
          </Nav>
          <SearchBar />
        </Collapse>
      </Navbar>
    );
}

export default Navigation;