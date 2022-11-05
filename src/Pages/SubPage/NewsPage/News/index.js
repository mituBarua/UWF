import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const { id, title, description, media_list } = news;

  return (
    <div>


      <div className="row m-4">
        <div className="col-md-5">
          <img src={media_list[0]?.url} alt='img' style={{ width: '100%', borderRadius: '10px' }} />
        </div>
        <div className="col-md-7">
          <h3>{title}</h3>
          <p>{description}</p>
          <Link to={`/news-details/${id}`}>
            <Button className="donate btn btn-primary">More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
