import * as React from 'react';
import {Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import ProfilePhoto from "../components/Avatar";
import {AuthenticationAPI} from "../api/Authentication";


async function getProfile(setProfile){
    const response = await axios({
        url: 'http://localhost:8081/profile/me',
        method: 'get',
        withCredentials: true,
    })
    if(response.status === 200) {
        setProfile(response.data);
    }else if(response.status === 401){
        await AuthenticationAPI.update_access_token();
    }
}


const Profile = () => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        getProfile(setProfile);
    }, []);

    return (
        <Container className="mt-3">
            <h3>Профиль</h3>
            <ProfilePhoto/>
            <Row><h5>Логин: {profile.login}</h5></Row>
            <Row><h5>ID: {profile.id}</h5></Row>
            <Row><h5>email: {profile.email}</h5></Row>
        </Container>
    );
};

export default Profile;
