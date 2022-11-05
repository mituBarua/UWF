import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaDonate, FaUsers, FaRegMoneyBillAlt } from "react-icons/fa";
import './style.css';
const HelpUs = () => {
    return (
        <div className="helpUs-bg">
            <div className="container">
                <div className="text-center helpUs-text">
                    <h2>HOW CAN YOU HELP US?</h2>
                    <p>Mid Text. Lorem Ipsum Text.Lorem Ipsum Text.Lorem Ipsum Text.Lorem Ipsum Text.Lorem Ipsum Text.</p>
                </div>
                <div>
                    <Row className="m-5">
                        <Col sm className="donator">
                            <FaDonate className="helpUs-icon"/>
                            <h4>DONATOR</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                            <Button className="mt-2 donate btn btn-primary" >Learn More</Button>
                        </Col>
                        <Col sm  className="donator">
                            <FaRegMoneyBillAlt className="helpUs-icon" />
                            <h4>FUNDRISING</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                            <Button className="mt-2 donate btn btn-primary" >Learn More</Button>
                        </Col>
                        <Col sm >
                            <FaUsers className="helpUs-icon" />
                            <h4>VOLUNTEER</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                            <Button className="mt-2 donate btn btn-primary" >Learn More</Button>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
};

export default HelpUs;