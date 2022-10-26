import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
const AllImage = ({ type, image }) => {
    const len = type == 'all' ? 4 : 8
    return (
        <div className="row mb-5">
            {
                image?.slice(0, len).map((item) => (
                    <Col md="3" sm="6" className="my-2">
                        <Card>
                            <Card.Img variant="top" src={item.url} />
                        </Card>
                    </Col>
                ))
            }

        </div>
    );
};

export default AllImage;
