"use client";
import { LineChart } from "@mui/x-charts/LineChart";
type Measurement = {
  id: number;
  insertedAt: Date;
  recordedAt: string;
  measure: number;
  unitId: number;
  deviceId: number;
};

export default function MuiLineChart({
  data,
  displayUnit,
}: {
  data: Measurement[];
  displayUnit: string;
}) {
  return (
    <>
      <div className="text-center text-black">{displayUnit}</div>
      <br />
      <LineChart
        xAxis={[{ data: data.map((measurement) => measurement.id) }]}
        series={[
          {
            data: data.map((meausurement) => meausurement.measure),
          },
        ]}
        width={1900}
        height={400}
      />
    </>
  );
}
