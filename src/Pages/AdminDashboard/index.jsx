import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  PoundCircleOutlined,
  UserOutlined,
  LineChartOutlined,
  BankOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import CardComponent from "../../Components/CardComponent";
import PieChart from "../../Components/ChartComponent/PieChart";
import BarChart from "../../Components/ChartComponent/BarChart";

import {
  activeCampaigns,
  totalDonations,
  lastMonthDonation,
  currentMonthDonation,
  usersPerRole,
  lastFewMonthsDonation,
} from "./utils";

const AdminDashboard = (props) => {
  const {
    user: {
      dashboard: { userList, projects, campaigns, volunteers, donations },
    },
  } = useSelector((state) => state.user);

  const barChartData = lastFewMonthsDonation(donations);

  return (
    <>
      <Row gutter={16}>
        <Col>
          <CardComponent
            icon={<PoundCircleOutlined />}
            title={"Fund Raised This Year"}
            amount={totalDonations(donations) + " £"}
            color={"#CD7360"}
          />
        </Col>
        <Col>
          <CardComponent
            title={"Active Users"}
            amount={userList.length}
            icon={<UserOutlined />}
            color={"#c5b34c"}
          />
        </Col>
        <Col>
          <CardComponent
            title={"Active Campaigns"}
            amount={activeCampaigns(campaigns)}
            icon={<LineChartOutlined />}
            color={"#a25bc2"}
          />
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col>
          <CardComponent
            title={"Last Month Donations"}
            amount={lastMonthDonation(donations)}
            icon={<BankOutlined />}
            color={"#5BA4C2"}
          />
        </Col>
        <Col>
          <CardComponent
            title={"Project Completed"}
            amount={projects.length}
            icon={<TrophyOutlined />}
            color={"#35a55a"}
          />
        </Col>
        <Col>
          <CardComponent
            title={"Total Volunteer"}
            amount={volunteers.length}
            icon={<TrophyOutlined />}
            color={"#15a796"}
          />
        </Col>
      </Row>

      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <BarChart data={barChartData} />
        <PieChart data={usersPerRole(userList)} />
      </div>
    </>
  );
};

export default AdminDashboard;
