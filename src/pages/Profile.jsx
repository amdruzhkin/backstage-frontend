import * as React from 'react';
import {Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';


async function get_profile(setProfile){
    const response = await axios({
        url: 'http://localhost:8081/profile/me',
        method: 'get',
        withCredentials: true,
    })
    if(response.status === 200) {
        setProfile(response.data);
    }
}


const Profile = () => {

    const [profile, setProfile] = useState({'login': 'init', 'id': 'init', 'email': 'init'});

    useEffect(() => {
        get_profile(setProfile);
    }, []);

    return (
        <Container className="mt-3">
            <h3>Профиль</h3>
            <Row><h5>Логин: {profile.login}</h5></Row>
            <Row><h5>ID: {profile.id}</h5></Row>
            <Row><h5>email: {profile.email}</h5></Row>
        </Container>
    );
};

export default Profile;
