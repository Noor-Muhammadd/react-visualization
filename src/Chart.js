import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { QueryRenderer } from "@cubejs-client/react";

import moment from "moment";
import numeral from "numeral";
import cubejs from "@cubejs-client/core";

const cubejsApi = cubejs(process.env.REACT_APP_CUBEJS_TOKEN, {
  apiUrl: process.env.REACT_APP_API_URL
});
const numberFormatter = (item) => numeral(item).format("0,0");
const dateFormatter = (item) => moment(item).format("MMM YY");
const colors = ["#7DB3FF", "#49457B", "#FF7C78"];

const Chart = ({ title, render }) => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">{`Orders by Status: ${title}`}</CardTitle>
      <CardText>
        <QueryRenderer
          query={{
            measures: ["Orders.count"],
            dimensions: ["Orders.status"],
            timeDimensions: [
              {
                dimension: "Orders.createdAt",
                dateRange: ["2019-01-01", "2020-12-31"],
                granularity: "month"
              }
            ]
          }}
          cubejsApi={cubejsApi}
          render={({ resultSet }) => {
            if (!resultSet) {
              return <div className="loader" />;
            }

            resultSet.seriesNames = () => [
              "completed, Orders.count",
              "processing, Orders.count",
              "shipped, Orders.count"
            ];

            return render({
              resultSet,
              numberFormatter,
              dateFormatter,
              colors
            });
          }}
        />
      </CardText>
    </CardBody>
  </Card>
);

export default Chart;
