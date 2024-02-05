import React from 'react';
import {Container, Row, FloatingLabel, Button, Col, Tab, Tabs} from "react-bootstrap";
import {useParams} from "react-router-dom";
import studioData from "./studio.data"
import Image from 'react-bootstrap/Image';


const StudioPage = () => {
    const {slug} = useParams();

    return (<Container className="mt-3">
            <Row>
                <h3>Студия {studioData.name}</h3>
                <p>{studioData.working_hours}</p>
                <p>{studioData.address}</p>

            </Row>
            <Row>

                <Row xs={1} md={3} className="mt-3">
                    <Col>
                        {studioData.description}
                    </Col>
                    <Col>

                        <p><Image style={{marginRight: "8px", height: "24px"}}
                                  src="/icons/icon_location_64.png"/>{studioData.address}</p>
                        <p><Image style={{marginRight: "8px", height: "24px"}}
                                  src="/icons/icon_phone_64.png"/><a
                            href={"tel:" + studioData.phone}>{studioData.phone}</a></p>
                        <p><Image style={{marginRight: "8px", height: "24px"}}
                                  src="/icons/icon_vk_64.png"/>Lorem ipsum dolor sit amet</p>
                        <p><Image style={{marginRight: "8px", height: "24px"}}
                                  src="/icons/icon_facebook_64.png"/>Lorem ipsum dolor sit amet</p>
                        <p><Image style={{marginRight: "8px", height: "24px"}}
                                  src="/icons/icon_instagram_64.png"/>Lorem ipsum dolor sit amet</p>
                        <p><Image style={{marginRight: "8px", height: "24px"}}
                                  src="/icons/icon_pinterest_64.png"/>Lorem ipsum dolor sit amet</p>
                    </Col>
                </Row>


            </Row>

        </Container>

    )
}

export default StudioPage;