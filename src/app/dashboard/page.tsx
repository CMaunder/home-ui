import prisma from "../../../server/db";
import RechartLine from "./rechartLine";

type Measurement = {
  id: number;
  insertedAt: Date;
  recordedAt: string;
  measure: number;
  unitId: number;
  deviceId: number;
};

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
    <>
      <h2>Dashboard</h2>
      <RechartLine data={temperatureMeasurements} name={"Temperature"} />
      <RechartLine data={humidityMeasurements} name={"Humidity"} />
    </>
  );
}
