import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Last 12 Months Donation History",
    },
  },
};

const BarChart = ({ data: { labels, totalAmounts } }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Amount",
        data: labels?.map((item, idx) => totalAmounts[idx]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div style={{ width: "50%" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
