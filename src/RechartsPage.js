import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar
} from "recharts";

import Chart from "./Chart.js";

const RechartsPage = () => (
  <Chart
    title="Recharts"
    render={({ resultSet, colors, dateFormatter, numberFormatter }) => (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={resultSet.chartPivot()}>
          <XAxis tickFormatter={dateFormatter} dataKey="x" />
          <YAxis tickFormatter={numberFormatter} />
          {resultSet.seriesNames().map((series, i) => (
            <Bar
              stackId="a"
              dataKey={series}
              name={series.split(",")[0]}
              fill={colors[i]}
            />
          ))}
          <Legend />
          <Tooltip labelFormatter={dateFormatter} formatter={numberFormatter} />
        </BarChart>
      </ResponsiveContainer>
    )}
  />
);

export default RechartsPage;
