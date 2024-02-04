import * as React from 'react';
import {Button, Card, Col, Container, Form, InputGroup, Row, Accordion} from "react-bootstrap";
import {Search} from "react-bootstrap-icons";

const StudiosPage = () => {

    const studios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,];

    return (

        <Container className="mt-3">
            <Row><h3>Студии</h3></Row>
            <Row>
                <Col md={3} className="mb-3">
                    <Form>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Поиск"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="warning">
                                <Search className="mx-1"/>
                            </Button>
                        </InputGroup>
                        <Form.Group className="mb-3">
                            <Form.Label>Сортировать по</Form.Label>
                            <Form.Select name="role"
                            >
                                <option>Не выбрано</option>
                                <option value="reviews">Количеству отзывов</option>
                                <option value="price_ascending">Цена по возрастанию</option>
                                <option value="price_descending">Цена по убыванию</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Цена за час</Form.Label>
                            <Row>
                                <Col><Form.Control placeholder="от"/></Col>
                                _
                                <Col><Form.Control placeholder="до"/></Col>
                            </Row>
                        </Form.Group>
                        <Accordion>
                            {/*<Accordion.Item eventKey="0">*/}
                            {/*    <Accordion.Header>Размеры помещения</Accordion.Header>*/}
                            {/*    <Accordion.Body>*/}
                            {/*        <Form.Group controlId="formBasicEmail">*/}
                            {/*            <Form.Label>Площадь, м<sup>2</sup></Form.Label>*/}
                            {/*            <Row>*/}
                            {/*                <Col><Form.Control placeholder="от"/></Col>*/}
                            {/*                _*/}
                            {/*                <Col><Form.Control placeholder="до"/></Col>*/}
                            {/*            </Row>*/}
                            {/*            <Form.Label className="mt-3">Высота потолков, м</Form.Label>*/}
                            {/*            <Row>*/}
                            {/*                <Col><Form.Control placeholder="от"/></Col>*/}
                            {/*                _*/}
                            {/*                <Col><Form.Control placeholder="до"/></Col>*/}
                            {/*            </Row>*/}
                            {/*        </Form.Group>*/}
                            {/*    </Accordion.Body>*/}
                            {/*</Accordion.Item>*/}
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Интерьер</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Детский"/>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Имитация квартиры"/>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Имитация кухни"/>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Имитация улицы"/>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Лофт"/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Услуги и удобства</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Wi-Fi"/>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Бесплатная парковка"/>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Гримерка"/>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Кондиционер"/>
                                    <Form.Check type="checkbox" aria-label="radio 1" label="Кофе-машина"/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Form>
                </Col>
                <Col md={9}>
                    <Row xs={1} md={3}>
                        {
                            studios.map((i) => (
                                <Col className="mb-3">
                                    <Card>
                                        <Card.Img variant="top" src="https://via.placeholder.com/300"/>
                                        <Card.Body>
                                            <Card.Title>Студия {i}</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </Card.Text>
                                            <Button variant="warning" className='w-100'>Забронировать</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }

                        {/*<Col className="mt-3">*/}
                        {/*    <Card>*/}
                        {/*        <Card.Img variant="top" src="https://via.placeholder.com/300" />*/}
                        {/*        <Card.Body>*/}
                        {/*            <Card.Title>Название карточки 1</Card.Title>*/}
                        {/*            <Card.Text>*/}
                        {/*                Описание карточки 1*/}
                        {/*            </Card.Text>*/}
                        {/*        </Card.Body>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                        {/*<Col className="mt-3">*/}
                        {/*    <Card>*/}
                        {/*        <Card.Img variant="top" src="https://via.placeholder.com/300" />*/}
                        {/*        <Card.Body>*/}
                        {/*            <Card.Title>Название карточки 2</Card.Title>*/}
                        {/*            <Card.Text>*/}
                        {/*                Описание карточки 2*/}
                        {/*            </Card.Text>*/}
                        {/*        </Card.Body>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                        {/*<Col className="mt-3">*/}
                        {/*    <Card>*/}
                        {/*        <Card.Img variant="top" src="https://via.placeholder.com/300" />*/}
                        {/*        <Card.Body>*/}
                        {/*            <Card.Title>Название карточки 3</Card.Title>*/}
                        {/*            <Card.Text>*/}
                        {/*                Описание карточки 3*/}
                        {/*            </Card.Text>*/}
                        {/*        </Card.Body>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                    </Row>
                </Col>
            </Row>

        </Container>

    );
};

export default StudiosPage;
