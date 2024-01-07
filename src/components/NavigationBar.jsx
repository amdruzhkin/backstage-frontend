import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Form,
    Button,
    FormControl,
    InputGroup,
    Modal,
    Tab,
    Tabs,
} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import CityManager from "./CityManager";
import {AuthenticationAPI} from "../api/Authentication";
import Cookies from "js-cookie";


const NavigationBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState('');

    const [modalShow, setModalShow] = useState(false);
    const showModal = () => setModalShow(true);
    const hideModal = () => setModalShow(false);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(searchQuery);
    };

    const [loginForm, setLoginForm] = useState({
        login: '',
        password: ''
    });

    const [registerForm, setRegisterForm] = useState({
        login: '',
        email: '',
        password_1: '',
        password_2: ''
    });

    const handleLoginInputChange = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value});
    };

    const handleRegisterInputChange = (e) => {
        setRegisterForm({...registerForm, [e.target.name]: e.target.value});
    };


    async function handleLoginSubmit(e) {
        e.preventDefault();
        let response = await AuthenticationAPI.sign_in(loginForm);
        if (response.status === 200){
            setIsAuth(true);
            Cookies.set('access_token', response.data.access_token);
            Cookies.set('refresh_token', response.data.refresh_token);
            window.location.reload();
        }
    }

    async function handleRegisterSubmit(e) {
        e.preventDefault();
        // console.log('Register', registerForm);
        let response = await AuthenticationAPI.sign_up(registerForm)
        if(response.status === 200)
            //
            setIsAuth(true);
            window.location.reload();
    }

    async function handleLogout(e) {
        e.preventDefault();
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        setIsAuth(false);
        window.location.reload();
    }


    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">Backstage</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Главная</Nav.Link>
                            <Nav.Link as={Link} to="/news">Новости</Nav.Link>
                            <NavDropdown menuVariant="dark" title="Студии и залы">
                                <NavDropdown.Item as={Link} to="/studios">Студии</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/halls">Залы</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/photographers">Фотографы</Nav.Link>
                        </Nav>
                        <Nav>
                            {isAuth === true ? (
                                <NavDropdown variant="warning" menuVariant="dark" title="Личный кабинет">
                                    <NavDropdown.Item as={Link} to="/profile/me">Профиль</NavDropdown.Item>
                                    <NavDropdown.Item>Календарь</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>Выйти</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link onClick={showModal}>Личный кабинет</Nav.Link>
                            )}
                            <CityManager/>
                        </Nav>
                        <Form inline onSubmit={handleSearchSubmit}>
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    placeholder="Поиск"
                                    className="mr-sm-2"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <Button variant="outline-warning" type="submit">Найти</Button>
                            </InputGroup>
                        </Form>



                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={modalShow} onHide={hideModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="login" id="login-registration-tabs" fill>
                        <Tab eventKey="login" title="Вход">
                            <Form onSubmit={handleLoginSubmit} className="mt-3">
                                <Form.Group className="mb-3">
                                    <Form.Label>Логин</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        name="login"
                                        value={loginForm.login}
                                        onChange={handleLoginInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder=""
                                        name="password"
                                        value={loginForm.password}
                                        onChange={handleLoginInputChange}
                                    />
                                </Form.Group>
                                <Button variant="warning" type="submit" className="w-100">
                                    Войти
                                </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="register" title="Регистрация">
                            <Form onSubmit={handleRegisterSubmit} className="mt-3">
                                <Form.Group className="mb-3">
                                    <Form.Label>Логин</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        name="login"
                                        value={registerForm.login}
                                        onChange={handleRegisterInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder=""
                                        name="email"
                                        value={registerForm.email}
                                        onChange={handleRegisterInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder=""
                                        name="password_1"
                                        value={registerForm.password_1}
                                        onChange={handleRegisterInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Повторите пароль</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder=""
                                        name="password_2"
                                        value={registerForm.password_2}
                                        onChange={handleRegisterInputChange}
                                    />
                                </Form.Group>
                                <Button variant="warning" type="submit" className="w-100">
                                    Зарегистрироваться
                                </Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default NavigationBar;