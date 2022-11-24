import React from 'react';
import './style.css'
import { Row, Card, Button } from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa";
const About = () => {
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center about-us">
                <h2>WHAT WE DO?</h2>
                <p>Unity Welfare Foundation is a UK based registered charity organisation.
                    It was established in 2009. We provide help to people who are victims of
                    natural disasters, conflict or suffering from poverty, hunger, disease, illiteracy
                    , discrimination, homelessness, unemployment, injustice, deprivation or
                    lack of skills and economic opportunities.</p>
            </div>
            <div className="about-card">
                <Row>
                    <div className="col-md-6 col-lg-3">
                        <Card >
                            <Card.Body className="d-flex flex-column align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <FaCheckCircle className="icon-color" />
                                    <Card.Title className="m-2">Our Mission</Card.Title>
                                </div>


                                <Card.Text className="text-center">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.

                                </Card.Text>

                                <Button className="m-3" variant="danger">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Card >
                            <Card.Body className="d-flex flex-column align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <FaCheckCircle className="icon-color" />
                                    <Card.Title className="m-2">Our Mission</Card.Title>
                                </div>


                                <Card.Text className="text-center">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.

                                </Card.Text>
                                <Button className="m-3" variant="danger">Learn More</Button>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Card >
                            <Card.Body className="d-flex flex-column align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <FaCheckCircle className="icon-color" />
                                    <Card.Title className="m-2">Our Mission</Card.Title>
                                </div>


                                <Card.Text className="text-center">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.

                                </Card.Text>
                                <Button className="m-3" variant="danger">Learn More</Button>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Card >
                            <Card.Body className="d-flex flex-column align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <FaCheckCircle className="icon-color" />
                                    <Card.Title className="m-2">Our Mission</Card.Title>
                                </div>


                                <Card.Text className="text-center">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.

                                </Card.Text>
                                <Button className="m-3" variant="danger">Learn More</Button>

                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default About;