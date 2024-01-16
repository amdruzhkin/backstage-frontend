import * as React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import ProfilePhoto from "../components/Avatar";
import {instance} from "../api/AxiosInstance";


async function getProfile(setProfile) {
    await instance.get("/profile/me").then((response) => {
        setProfile(response.data);
        console.log(response.data);
        return response;
    }).catch((response) => {
        console.log(response);
        return response;
    });
    // const response = await axios({
    //     url: 'http://localhost:8081/profile/me',
    //     method: 'get',
    //     withCredentials: true,
    // })
    // if(response.status === 200) {
    //     setProfile(response.data);
    // }else if(response.status === 401){
    //     await AuthenticationAPI.update_access_token();
    // }
}


const Profile = () => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        getProfile(setProfile);
    }, []);

    return (
        <Container className="mt-3">
            <h3>Профиль</h3>
            {/*<ProfilePhoto/>*/}
            <Row><h5>Логин: {profile.login}</h5></Row>
            <Row><h5>Email: {profile.email}</h5></Row>
            <Row className="g-4">
                <Col md={3}>
                    <Card>
                        {/*<Card.Img variant="top"*/}
                        {/*          src="holder.js/100px180"/>*/}
                        <Card.Body>
                            <Card.Title>Фотограф</Card.Title>
                            <Card.Text>
                                Добавьте карточку фотографа с примерами работ и ценами на услуги
                            </Card.Text>
                            <Button variant="warning" className="w-100">Добавить фотографа</Button>
                        </Card.Body>

                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        {/*<Card.Img variant="top"*/}
                        {/*          src="holder.js/100px180"/>*/}
                        <Card.Body>
                            <Card.Title>Студия</Card.Title>
                            <Card.Text>
                                Добавьте карточку студии с фотографиями интерьера, характеристиками и ценами на услуги
                            </Card.Text>
                            <Button variant="warning" className="w-100">Добавить студию</Button>
                        </Card.Body>

                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        {/*<Card.Img variant="top"*/}
                        {/*          src="holder.js/100px180"/>*/}
                        <Card.Body>
                            <Card.Title>Зал</Card.Title>
                            <Card.Text>
                                Добавьте карточку зала с фотографиями интерьера, характеристиками и ценами на услуги
                            </Card.Text>
                            <Button variant="warning" className="w-100">Добавить зал</Button>
                        </Card.Body>

                    </Card>
                </Col>
                <Col md={3} >
                    <Card style={{height:100+'%'}}>
                        {/*<Card.Img variant="top"*/}
                        {/*          src="holder.js/100px180"/>*/}
                        <Card.Body>
                            <Card.Title>Визажист</Card.Title>
                            <Card.Text>
                                Добавьте карточку визажиста с примерами работ и ценами на услуги
                            </Card.Text>
                            <Button variant="warning" className="w-100">Добавить зал</Button>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
