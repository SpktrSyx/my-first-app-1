import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategorieList from './CategorieList';

const Header = () =>
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Mon beau blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Text><Link to="/">Home</Link></Navbar.Text>
          <Navbar.Text><Link to="/contact">Contact</Link></Navbar.Text>
          <Navbar.Text><Link to="/pouet">404</Link></Navbar.Text>
          <CategorieList />            
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </header>
;

export default Header;
