import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Container, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import CityManager from "./CityManager";




const NavigationBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(searchQuery);
    };


  return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
          <Navbar.Brand as={Link} to="/">Backstage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <CityManager/>
                  <Nav.Link as={Link} to="/">Главная</Nav.Link>
                  <NavDropdown menuVariant="dark" title="Студии и залы" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/studios">Студии</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/halls">Залы</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/photographers">Фотографы</Nav.Link>
              </Nav>
              <Form inline onSubmit={handleSearchSubmit}>
                  <InputGroup>
                  <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                      value={searchQuery}
                      onChange={handleSearchChange}
                  />
                  <Button variant="outline-warning" type="submit">Найти</Button>
                  </InputGroup>



              </Form>{isAuth === false ? (
              <Button className="mx-2" variant="warning">Профиль</Button>
          ) : (
              <Button className="mx-2" variant="warning" as={Link} to="/profile">Профиль</Button>

          )}
          </Navbar.Collapse>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;