import prisma from "../../../server/db";
import MuiLineChart from "./muiLineChart";

export default async function Dashboard() {
  let measurements = await prisma.measurement.findMany({
    where: {
      unitId: {
        in: [1, 2],
      },
    },
  });
  measurements = JSON.parse(JSON.stringify(measurements));
  const mappedMeasurements = measurements.map((measurement) => ({
    ...measurement,
    measure: +measurement.measure,
    recordedAt: new Date(measurement.recordedAt).toLocaleString(),
  }));
  const temperatureMeasurements = mappedMeasurements.filter(
    (measurement) => measurement.unitId === 1
  );
  const humidityMeasurements = mappedMeasurements.filter(
    (measurement) => measurement.unitId === 2
  );
  return (
    <div>
      <div>Dashboard</div>
      <MuiLineChart data={temperatureMeasurements} displayUnit="Temperature" />
      <MuiLineChart data={humidityMeasurements} displayUnit="Humidity" />
    </div>
  );
}
