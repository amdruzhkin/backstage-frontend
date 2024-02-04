import React, {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import {Badge, Button, Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";
import CityManager from "./CityManager";
import {AuthenticationAPI} from "../../api/Authentication";
import {useNavigate} from "react-router-dom";
import {PersonCircle} from "react-bootstrap-icons";


const NavigationBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [expanded, setExpanded] = useState(false);
    const navigator = useNavigate();
    const logout = (e) => {
        e.preventDefault();
        AuthenticationAPI.logout();
        setIsAuth(false);
        navigator('/');
        window.location.reload();
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded}>
            <Container>
                <Navbar.Brand>Backstage</Navbar.Brand>
                <Navbar.Toggle aria-controls="navigation-bar"
                               onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id="navigation-bar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Главная</Nav.Link>
                        <NavDropdown menuVariant="dark" title="Студии и залы">
                            <NavDropdown.Item as={Link} to="/studios"
                                              onClick={() => setExpanded(false)}>Студии</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/halls"
                                              onClick={() => setExpanded(false)}>Залы</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/photographers" onClick={() => setExpanded(false)}>Фотографы</Nav.Link>
                    </Nav>
                    <Nav>
                        {isAuth
                            ? <NavDropdown menuVariant="dark" title={
                                <span>
                                    <span>Личный кабинет</span>
                                    <Badge bg="warning" text="dark" className="mx-1">
                                        1
                                    </Badge>
                                </span>
                            }>

                                <NavDropdown.Item as={Link} to="/profile/me">Профиль</NavDropdown.Item>
                                <NavDropdown.Item>События</NavDropdown.Item>
                                <NavDropdown.Item>Календарь</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item onClick={logout}>Выйти</NavDropdown.Item>
                            </NavDropdown>
                            : <Nav.Link as={Link} to="/authentication" onClick={() => setExpanded(false)}>Личный
                                кабинет</Nav.Link>
                        }

                        {/*<CityManager/>*/}
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
                    {/*<Form inline>*/}
                    {/*    <InputGroup>*/}
                    {/*        <FormControl*/}
                    {/*            type="text"*/}
                    {/*            placeholder="Поиск"*/}
                    {/*            className="mr-sm-2"*/}
                    {/*            // value={searchQuery}*/}
                    {/*            // onChange={handleSearchChange}*/}
                    {/*        />*/}
                    {/*        <Button variant="outline-warning" type="submit">Найти</Button>*/}
                    {/*    </InputGroup>*/}
                    {/*</Form>*/}


                </Navbar.Collapse>

            </Container>

        </Navbar>

    );
};

export default NavigationBar;