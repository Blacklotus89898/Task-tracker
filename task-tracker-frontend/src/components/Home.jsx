import { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
import "./Home.css";

// dashboard

const Arc = ({ radius, startAngle, endAngle }) => {
  // Convert degrees to radians
  const startRadians = (startAngle * Math.PI) / 180;
  const endRadians = (endAngle * Math.PI) / 180;

  // Calculate arc coordinates
  const x1 = radius * Math.cos(startRadians);
  const y1 = radius * Math.sin(startRadians);
  const x2 = radius * Math.cos(endRadians);
  const y2 = radius * Math.sin(endRadians);

  // Determine the largeArcFlag
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  // Path data string
  const pathData = `M ${x1} ${y1} A ${radius} ${radius}, 0, ${largeArcFlag}, 1, ${x2} ${y2}`;

  return (
    <svg width="200" height="200">
      <path d={pathData} stroke="black" fill="transparent" />
    </svg>
  );
};

export default function Home() {
  const { contextValue } = useContext(MyContext);

  const [progressValue, setProgressValue] = useState(50);

  useEffect(() => {
    setProgressValue(
      (contextValue.filter((t) => t.status === "Done").length * 100) /
        contextValue.length
    );
  }, [contextValue]);

  function drawPieChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY);

    // Function to draw a pie slice
    function drawSlice(startAngle, endAngle, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fill();
    }

    // Function to convert degrees to radians
    function degreesToRadians(degrees) {
      return (degrees * Math.PI) / 180;
    }

    // Draw pie slices based on data
    let startAngle = 0;
    for (const slice of data) {
      const endAngle = startAngle + degreesToRadians(slice.value);
      drawSlice(startAngle, endAngle, slice.color);
      startAngle = endAngle;
    }
  }

  // Example data for the pie chart
  const pieChartData = [
    { value: 45, color: 'red' },
    { value: 30, color: 'green' },
    { value: 25, color: 'blue' },
  ];

  // Draw the pie chart
  drawPieChart('pieChartCanvas', pieChartData);

  return (
    <>
    {/* migrate some stuff to a dashboard and create a header instead of navbar, pie chart using js and css + canvas */}
      <div className="text-center text-2xl p-16">
        <div> Welcome to home!!!</div>
        <h3>Total task: {contextValue.length}</h3>
        <h3>
          Task completed:{" "}
          {contextValue.filter((t) => t.status == "Done").length}
        </h3>
      </div>
      <div className="relative text-center flex justify-center items-center">
        <div
          className="element2 absolute top-0  z-20 border-4 border-blue-200 bg-blue-300"
          style={{ width: `${progressValue * 5}px`, height: "10px" }}
        ></div>
        <div
          className="element1 absolute top-0  z-10 border-4 border-red-400"
          style={{ width: `${500}px`, height: "10px" }}
        ></div>
          <Arc radius={40} startAngle={0} endAngle={-140} />
          <canvas id="pieChartCanvas" width="400" height="400"></canvas>
      </div>

    </>
  );
}
