"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { useEffect, useState } from "react";

export default function RechartLine({
  data,
  name,
}: {
  data: any;
  name: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient) {
    return (
      <LineChart
        width={1900}
        height={450}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="recordedAt" /> */}
        <YAxis domain={name === "Humidity" ? [40, 80] : [10, 30]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="measure"
          name={name}
          stroke={name === "Humidity" ? "#8884d8" : "#FF6961"}
          activeDot={{ r: 8 }}
          dot={false}
          animationDuration={3000}
        />
      </LineChart>
    );
  }
}
