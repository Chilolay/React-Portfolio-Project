import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
// import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <Navbar>
        <NavbarBrand></NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              {/* <NavLink className="nav-link" to="/">
                Home
              </NavLink> */}
            </NavItem>
            <NavItem>
              {/* <NavLink className="nav-link" to="/care guides">
                Care Guides
              </NavLink> */}
            </NavItem>
            <NavItem>
              {/* <NavLink className="nav-link" to="/articles">
                Articles
              </NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
}

export default Navigation;