"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LineController,
  BarController,
  PieController,
  ArcElement,
} from "chart.js"
import { useEffect, useState } from "react"
import { Bar, Line, Pie } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LineController,
  BarController,
  PieController,
  ArcElement,
)

interface AnalyticsChartProps {
  type: "line" | "bar" | "pie" | "area"
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Chart",
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

const lineData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
}

const barData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random() * 100),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
}

const pieData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Dataset 1",
      data: [300, 50, 100],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
      hoverOffset: 4,
    },
  ],
}

const areaData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}

export function AnalyticsChart({ type }: AnalyticsChartProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const chartHeight = type === "pie" ? 240 : 350

  const mobileOptions = {
    ...options,
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      ...options.scales,
      x: {
        ...options.scales?.x,
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
    plugins: {
      ...options.plugins,
      legend: {
        ...options.plugins?.legend,
        position: width < 768 ? "bottom" : "top",
      },
    },
  }

  switch (type) {
    case "line":
      return (
        <div className="h-[300px] md:h-[350px]">
          <Line options={mobileOptions as any} data={lineData} />
        </div>
      )
    case "bar":
      return (
        <div className="h-[300px] md:h-[350px]">
          <Bar options={mobileOptions as any} data={barData} />
        </div>
      )
    case "pie":
      return (
        <div className="h-[240px]">
          <Pie options={mobileOptions as any} data={pieData} />
        </div>
      )
    case "area":
      return (
        <div className="h-[300px] md:h-[350px]">
          <Line options={mobileOptions as any} data={areaData} />
        </div>
      )
    default:
      return null
  }
}
