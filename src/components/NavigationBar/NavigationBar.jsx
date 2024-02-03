import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import {Button, Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";
import CityManager from "./CityManager";


const NavigationBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (

        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">Backstage</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Главная</Nav.Link>
                        <NavDropdown menuVariant="dark" title="Студии и залы">
                            <NavDropdown.Item as={Link} to="/studios">Студии</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/halls">Залы</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/photographers">Фотографы</Nav.Link>
                    </Nav>
                    <Nav>
                        {isAuth
                            ? <Nav.Link as={Link} to="/profile/me">Личный кабинет</Nav.Link>
                            : <Nav.Link as={Link} to="/authentication">Личный кабинет</Nav.Link>
                        }

                        <CityManager/>
                    </Nav>
                    {/*<Nav>*/}
                    {/*    {isAuth === true ? (*/}
                    {/*        <NavDropdown variant="warning" menuVariant="dark" title="Личный кабинет">*/}
                    {/*            <NavDropdown.Item as={Link} to="/profile/me">Профиль</NavDropdown.Item>*/}
                    {/*            <NavDropdown.Item>Календарь</NavDropdown.Item>*/}
                    {/*            <NavDropdown.Divider/>*/}
                    {/*            <NavDropdown.Item onClick={handleLogout}>Выйти</NavDropdown.Item>*/}
                    {/*        </NavDropdown>*/}
                    {/*    ) : (*/}
                    {/*        <Nav.Link onClick={showModal}>Личный кабинет*/}

                    {/*        </Nav.Link>*/}
                    {/*    )}*/}
                    {/*    <CityManager/>*/}
                    {/*</Nav>*/}
                    <Form inline >
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder="Поиск"
                                className="mr-sm-2"
                                // value={searchQuery}
                                // onChange={handleSearchChange}
                            />
                            <Button variant="outline-warning" type="submit">Найти</Button>
                        </InputGroup>
                    </Form>


                </Navbar.Collapse>

            </Container>

        </Navbar>

    );
};

export default NavigationBar;