import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';
const Volunteer = ({volunteerList}) => {
    const{first_name,last_name,profile_picture,additional_note }= volunteerList
    const name = first_name +" "+ last_name;
    return (
        <div>
            <Card className="team-card">
                <div className="d-flex align-items-center justify-content-center">
                    <Card.Img variant="top"

                        image={profile_picture}
                        alt="green iguana"
                    />
                </div>
                <Card.Body className="team-desc">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {additional_note.slice(0, 90)}
                    </Card.Text>


                </Card.Body>
            </Card>
        </div>

    );
};

export default Volunteer;