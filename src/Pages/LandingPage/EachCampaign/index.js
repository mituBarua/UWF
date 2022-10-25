import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';
const EachCampaign = ({campaignList}) => {
    const { id, title,description,media_list } = campaignList;
    console.log(media_list[0].url);
    return (
        <div>
            <Card >
                <Card.Img variant="top" className="campaign-img" src={media_list[0]?.url} />
                <Card.Body>
                    <Card.Title>{title.slice(0,30)}</Card.Title>
                    <Card.Text>
                      {description.slice(0,90)}
                    </Card.Text>
                    <Button  className="donate btn btn-primary" >More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EachCampaign;