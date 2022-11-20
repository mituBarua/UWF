import React, { useState } from "react";
import { useSelector } from "react-redux";

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

//total volunteers - > volunteers.length
//total users -> userList.length
//total projects -> projects.length
//active campaigns -> activeCampaigns()
//total donations ->  totalDonations()
///last month donation -> lastMonthDonation()
//current month donation -> currentMonthDonation()

const AdminDashboard = () => {
  const {
    user: {
      dashboard: { userList, projects, campaigns, volunteers, donations },
    },
  } = useSelector((state) => state.user);

  return (
    <>
      <h2>Welcome to Dashboard!</h2>
    </>
  );
};

export default AdminDashboard;
