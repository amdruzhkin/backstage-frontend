import React from 'react';
import {Container} from "react-bootstrap";
// import {useState} from "react";
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

    // const [profile, setProfile] = useState({});

    // useEffect(() => {
    //     getProfile(setProfile);
    // }, []);

    return (
        <Container className="mt-3">
            <h3>Профиль</h3>
        </Container>
    );
};

export default Profile;
