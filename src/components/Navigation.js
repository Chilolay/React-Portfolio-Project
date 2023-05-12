import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
// import { NavLink } from "react-router-dom";
import SearchBar from './SearchBar';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <Navbar sticky="top" expand="md" className='mb-0'>
        <NavbarBrand className="ms-5" href="/">
          I Wet My Plants
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              {/* <NavLink className="nav-link" to="/"> */}
              Home
              {/* </NavLink> */}
            </NavItem>
            <NavItem>
              {/* <NavLink className="nav-link" to="/care guides"> */}
              Care Guides
              {/* </NavLink> */}
            </NavItem>
            <NavItem>
              {/* <NavLink className="nav-link" to="/articles"> */}
              Articles
              {/* </NavLink> */}
            </NavItem>
          </Nav>
          <SearchBar />
        </Collapse>
      </Navbar>
    );
}

export default Navigation;