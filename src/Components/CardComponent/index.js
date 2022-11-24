import React from "react";
import { Card } from "antd";
import "./style.css";

const CardComponent = (props) => {
  return (
    <div className="site-card-wrapper">
      <Card
        title={props.title}
        bordered={false}
        className="card-style-dashboard"
        extra={props.icon}
        style={{
          backgroundColor: props.color,
        }}
        headStyle={{
          color: "white",
        }}
      >
        <p>{props.amount}</p>
      </Card>
    </div>
  );
};

export default CardComponent;
