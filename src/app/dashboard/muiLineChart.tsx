"use client";
import { LineChart } from "@mui/x-charts/LineChart";

export default function MuiLineChart({
  xData,
  yData,
  displayUnit,
}: {
  xData: any;
  yData: any;
  displayUnit: string;
}) {
  console.log(yData);
  return (
    <>
      <div className="text-center text-black">{displayUnit}</div>
      <br />
      <LineChart xAxis={xData} series={yData} width={1900} height={400} />
    </>
  );
}
