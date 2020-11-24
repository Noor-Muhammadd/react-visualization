import React from "react";
import Chart from "./Chart";

const InputDataPage = () => (
  <Chart
    title="Input Data"
    render={({ resultSet, dateFormatter, numberFormatter }) => (
      <>
        <pre>{JSON.stringify(resultSet.chartPivot(), undefined, 2)}</pre>
        <pre>{JSON.stringify(resultSet.series(), undefined, 2)}</pre>
      </>
    )}
  />
);

export default InputDataPage;
