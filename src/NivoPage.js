import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import Chart from "./Chart.js";

//https://github.com/plouc/nivo/issues/138#issuecomment-373015114
const ticksFormmater = (ticksCount, value, data, dateFormatter) => {
  const valueIndex = data.map(i => i.x).indexOf(value);
  if (valueIndex % Math.floor(data.length / ticksCount) === 0) {
    return dateFormatter(value);
  }

  return "";
};

const NivoPage = () => (
  <Chart
    title="Nivo"
    render={({ resultSet, colors, dateFormatter, numberFormatter }) => (
      <div style={{ height: 300 }}>
        <ResponsiveBar
          enableLabel={false}
          colors={colors}
          data={resultSet.chartPivot()}
          keys={resultSet.seriesNames()}
          indexBy="x"
          enableGridY={false}
          padding={0.3}
          margin={{ top: 60, bottom: 60, left: 40 }}
          axisLeft={{
            format: numberFormatter
          }}
          axisBottom={{
            format: value =>
              ticksFormmater(8, value, resultSet.chartPivot(), dateFormatter)
          }}
          tooltip={({ id, value, color }) => (
            <strong style={{ color }}>
              {id.split(",")[0]}: {numberFormatter(value)}
            </strong>
          )}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 50,
              itemsSpacing: 2,
              itemWidth: 150,
              itemHeight: 20,
              itemDirection: "left-to-right"
            }
          ]}
        />
      </div>
    )}
  />
);

export default NivoPage;
