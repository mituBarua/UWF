import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardComponent from "../../Components/CardComponent";
import ChartComponent from "../../Components/ChartComponent";
import { DollarCircleOutlined, UserOutlined, LineChartOutlined, BankOutlined, TrophyOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import './style.css';
import UserChart from "../../Components/ChartComponent/UserChart";
const getTodayDate = () => {
  const date = new Date();
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};

const activeCampaigns = (campaigns) => {
  return campaigns.filter(({ end_date }) => end_date >= getTodayDate()).length;
};

const totalDonations = (donations) => {
  return donations.reduce((total, val) => total + val.amount, 0);
};

const lastMonthDonation = (donations) => {
  const date = new Date(getTodayDate());
  let month = date.getMonth();
  let year = date.getFullYear();
  if (month == 0) {
    year = year - 1;
    month = 12;
  }
  let _date = year + "-" + month;

  return donations
    .filter(({ created_at }) => created_at.slice(0, 10).includes(_date) > 0)
    .reduce((total, val) => total + val.amount, 0);
};

const currentMonthDonation = (donations) => {
  let _date = getTodayDate().slice(0, 7);

  return donations
    .filter(({ created_at }) => created_at.slice(0, 10).includes(_date) > 0)
    .reduce((total, val) => total + val.amount, 0);
};



const AdminDashboard = (props) => {
  const {
    user: {
      dashboard: { userList, projects, campaigns, volunteers, donations },
    },
  } = useSelector((state) => state.user);

  return (
    <>
      <Row gutter={16}>
        <Col >
          <CardComponent icon={<DollarCircleOutlined />} title={'Fund Raised This Year'} amount={totalDonations(donations)} color={'#CD7360'} />
        </Col>
        <Col>
          <CardComponent title={'Active Users'} amount={userList.length} icon={<UserOutlined />} color={'#c5b34c'} />
        </Col>
        <Col>
          <CardComponent title={'Active Campaigns'} amount={activeCampaigns(campaigns)} icon={<LineChartOutlined />} color={'#a25bc2'} />
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col>
          <CardComponent title={'Last Month Donations'} amount={lastMonthDonation(donations)} icon={<BankOutlined />} color={'#5BA4C2'} />
        </Col>
        <Col>
          <CardComponent title={'Project Completed'} amount={projects.length} icon={<TrophyOutlined />} color={'#35a55a'} />
        </Col>
        <Col>

          <CardComponent title={'Total Volunteer'} amount={volunteers.length} icon={<TrophyOutlined />} color={'#15a796'} />
        </Col>
      </Row>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <ChartComponent />
        <UserChart />
      </div>

    </>
  );
};

export default AdminDashboard;
