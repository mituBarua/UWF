import React from "react";
import { Row,Button } from "react-bootstrap";
import { FaDonate, FaUsers, FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
const HelpUs = () => {
  return (
    <div className="helpUs-bg">
      <div className="container">
        <div className="text-center helpUs-text">
          <h2>HOW CAN YOU HELP US?</h2>
          <p>
            Mid Text. Lorem Ipsum Text.Lorem Ipsum Text.Lorem Ipsum Text.Lorem
            Ipsum Text.Lorem Ipsum Text.
          </p>
        </div>
        <div>
          <Row className="justify-content-center">
            <div className="col-md-3 donator">
              <FaDonate className="helpUs-icon" />
              <h4>DONATOR</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
              <Link to={`/donate`}>
                <Button className="mt-2 donate btn btn-primary">
                  Learn More
                </Button>
              </Link>
            
            </div>
            <div className="col-md-3 donator">
              <FaRegMoneyBillAlt className="helpUs-icon" />
              <h4>FUNDRISING</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
              <Link to={`/donate`}>
                <Button className="mt-2 donate btn btn-primary">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="col-md-3 donator" >
              <FaUsers className="helpUs-icon" />
              <h4>VOLUNTEER</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
              <Link to={`/volunteer`}>
                <Button className="mt-2 donate btn btn-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HelpUs;
