import React from "react";
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  DiscreteColorLegend,
  Hint
} from "react-vis";
import "react-vis/dist/style.css";

import Chart from "./Chart.js";

const transformResult = (series, resultSet, dateFormatter) =>
  resultSet
    .chartPivot()
    .map(element => ({ x: Date.parse(element.x), y: element[series] }));

const RootPage = () => (
  <Chart
    title="React-Vis"
    render={({ resultSet, dateFormatter, colors, numberFormatter }) => (
      <XYPlot xType="time" height={300} width={500} stackBy="y">
        <XAxis tickFormat={dateFormatter} tickSize={8} />
        <YAxis />
        {resultSet.seriesNames().map((series, i) => (
          <VerticalBarSeries
            cluster="stack 1"
            key={i}
            color={colors[i]}
            data={transformResult(series, resultSet, dateFormatter)}
          />
        ))}
        <DiscreteColorLegend
          colors={colors}
          items={resultSet.seriesNames().map(i => i.split(",")[0])}
          orientation="horizontal"
          style={{ position: "absolute", left: 130, bottom: -30 }}
        />
      </XYPlot>
    )}
  />
);

export default RootPage;
