import React from "react";
import "./style.css";
import { Carousel, Button } from "react-bootstrap";
import bannerImg1 from "../../../assets/banner/banner.jpg";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={bannerImg1} alt="First slide" />
        <Carousel.Caption>
          <h2>WE CAN HELP SOMEONE</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div>
            <Button className="me-2 custom-btn" variant="danger">
              Donate Now
            </Button>
            <Button className="me-2 custom-btn-outline" variant="outline-danger">
              Learn More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={bannerImg1} alt="Second slide" />
        <Carousel.Caption>
          <h2>WE CAN HELP SOMEONE</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div>
            <Button className="me-2 custom-btn" variant="danger">
              Donate Now
            </Button>
            <Button className="me-2 custom-btn-outline" variant="outline-danger">
              Learn More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerImg1} alt="Third slide" />
        <Carousel.Caption>
          <h2>WE CAN HELP SOMEONE</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div>
            <Button className="me-2 custom-btn" variant="danger">
              Donate Now
            </Button>
            <Button className="me-2 custom-btn-outline" variant="outline-danger">
              Learn More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
