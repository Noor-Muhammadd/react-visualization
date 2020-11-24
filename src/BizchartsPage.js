import React from "react";

import { Chart, Axis, Tooltip, Geom, Legend } from "bizcharts";

import { default as ChartWrapper } from "./Chart.js";

const stackedChartData = resultSet => {
  const data = resultSet
    .pivot()
    .map(({ xValues, yValuesArray }) =>
      yValuesArray.map(([yValues, m]) => ({
        x: resultSet.axisValuesString(xValues, ", "),
        color: resultSet.axisValuesString(yValues, ", "),
        measure: m && Number.parseFloat(m)
      }))
    )
    .reduce((a, b) => a.concat(b));

  return data;
};

const RechartsPage = () => (
  <ChartWrapper
    title="BizCharts"
    render={({ resultSet, dateFormatter, colors, numberFormatter }) => (
      <Chart
        scale={{ x: { tickCount: 10 } }}
        height={300}
        data={stackedChartData(resultSet)}
        forceFit
      >
        <Axis name="x" label={{ formatter: dateFormatter }} />
        <Axis label={{ formatter: numberFormatter }} name="measure" />
        <Tooltip />
        <Geom
          type="intervalStack"
          position={`x*measure`}
          color={["color", colors]}
        />
        <Legend itemFormatter={item => item.split(",")[0]} />
      </Chart>
    )}
  />
);

export default RechartsPage;
