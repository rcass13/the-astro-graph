import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/bootstrap.min.css';
import '../../styles/homepage.css';

const HomepageHeader = () => {
  return (
    <Navbar id="homepageNavbar" className="navbar navbar-expand-lg text-dark bg-light">
        <div className="bg-light container-fluid">
      <Navbar.Brand className="bg-light" href="#">
        AstroLOGIC</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse className="bg-light"id="navbarNav">
        <Nav  className="bg-light mr-auto">
            <Nav.Link className="bg-light nav-link-expand" href="#">Home</Nav.Link>
          <Nav.Link className="bg-light nav-link-expand" href="#">Credits</Nav.Link>
          <Button id="logoutBtn"className="btn btn-secondary my-2 my-sm-0"href="#">Logout</Button>
        </Nav>
      </Navbar.Collapse>
        </div>
    </Navbar>
  );
}

export default HomepageHeader;

