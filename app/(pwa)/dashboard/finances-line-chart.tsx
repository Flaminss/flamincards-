"use client";

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line } from "react-chartjs-2";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  // "August",
  // "September",
  // "October",
  // "November",
  // "December",
];

export const financeData = {
  labels: months,
  datasets: [
    {
      label: "Dataset 1",
      data: [5000, 25_000, 50_000, 100_000],
      // borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [6000, 25_000, 50_000, 100_000, 150_000],
      // borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const oldDataset = {
  labels: [
    "Jan",
    "Feb",
    "March",
    "April",
    "Many",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [{ data: [1, 2.0, 8, 4] }],
};

export default function FInancesLineChart() {
  return (
    <Line
      data={financeData}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: "top" as const,
          },
          title: {
            display: false,
            text: "How much you've gained over the months",
          },
        },
        elements: {
          line: {
            tension: 0,
            borderWidth: 2,
            fill: "start",
            borderColor: "rgba(47, 97, 68, 1)",
            backgroundColor: "rgba(47, 97, 68, 0.3)",
          },
          point: {
            radius: 0,
            hitRadius: 0,
          },
        },
        scales: {
          xAxis: {
            display: false,
          },
          yAxis: {
            display: false,
          },
        },
      }}
    />
  );
}
