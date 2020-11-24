import React from "react";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryBar,
  VictoryAxis,
  VictoryStack,
  VictoryLegend
} from "victory";

import Chart from "./Chart.js";

const transformResult = (series, resultSet) =>
  resultSet.chartPivot().map(element => ({ x: element.x, y: element[series] }));

const RootPage = () => (
  <Chart
    title="Victory"
    render={({ resultSet, dateFormatter, colors, numberFormatter }) => (
      <div height={300}>
        <VictoryChart
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={(d, i) => `${resultSet.seriesNames()[i]}: ${d.y}`}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  flyoutStyle={{ fill: "white" }}
                />
              }
            />
          }
          domainPadding={{ x: 20, y: [0, 20] }}
        >
          <VictoryLegend
            colorScale={colors}
            data={resultSet.seriesNames().map(series => ({
              name: series.split(",")[0]
            }))}
            orientation="horizontal"
            y={275}
            x={130}
          />
          <VictoryAxis tickFormat={dateFormatter} tickCount={8} />
          <VictoryAxis dependentAxis />
          <VictoryStack colorScale={colors}>
            {resultSet.seriesNames().map((series, i) => (
              <VictoryBar key={i} data={transformResult(series, resultSet)} />
            ))}
          </VictoryStack>
        </VictoryChart>
      </div>
    )}
  />
);

export default RootPage;
