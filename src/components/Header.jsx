import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategorieList from './CategorieList';
import SearchForm from './SearchForm';

const Header = () =>
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Mon beau blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Text><Link to="/">Home</Link></Navbar.Text>
          <Navbar.Text><Link to="/contact">Contact</Link></Navbar.Text>
          <Navbar.Text><Link to="/pouet">404</Link></Navbar.Text>
          <CategorieList />            
        </Nav>
        <SearchForm />
      </Navbar.Collapse>
    </Navbar>
  </header>
;

export default Header;
