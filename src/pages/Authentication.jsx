import React from 'react';
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import SignInForm from "../components/AuthForms/SignInForm";
import SignUpForm from "../components/AuthForms/SignUpForm";


const Authentication = () => {
    return (
        <Container className="mt-3">
            <Row>
                <h3>Аутентификация</h3>
            </Row>
            <Row className="justify-content-center">
                <Col md={4}>
                    <Tabs defaultActiveKey="signin" id="auth-tabs" justify>
                        <Tab eventKey="signin" title="Вход">
                            <SignInForm/>
                        </Tab>
                        <Tab eventKey="signup" title="Регистрация">
                            <SignUpForm/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>

        </Container>
    );
};

export default Authentication;
