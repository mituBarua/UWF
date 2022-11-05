import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Project = ({ projectList }) => {
    const { id, title, description, media_list } = projectList;

    return (
        <div>
            <Card >
                <Card.Img variant="top" src={media_list[0].url} />
                <Card.Body>
                    <Card.Title>{title.slice(0, 30)}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 90)}
                    </Card.Text>
                    <Link to={`/project-details/${id}`}>
                        <Button className="donate btn btn-primary">More</Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};


export default Project;