import {Button, Card, Carousel, Col} from "react-bootstrap";
import * as React from "react";
import {Link} from "react-router-dom";

const StudioCard = ({studio}) => {
    return (
        <Col className="mb-3">
            <Card> {/* className="shadow-sm bg-white rounded" */}
                <Card.Img>

                </Card.Img>
                <Carousel indicators={false} interval={null}>
                    <Carousel.Item>
                        <Card.Img variant="top" src="https://via.placeholder.com/300"></Card.Img>

                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img variant="top" src="https://via.placeholder.com/301"></Card.Img>

                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img variant="top" src="https://via.placeholder.com/302"></Card.Img>

                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title>
                        <Link to={"/studio/" + studio.slug}
                              style={{textDecoration: 'none', color: "inherit"}}>{studio.name}</Link>
                    </Card.Title>
                    <Card.Text>{studio.address}</Card.Text>
                    <Card.Text>{studio.working_hours}</Card.Text>
                    <Card.Text style={{fontWeight: "bold"}}>ОТ {studio.price_from}₽</Card.Text>
                    <Button variant="warning" className='w-100'>Забронировать</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default StudioCard;