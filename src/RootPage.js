import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const RootPage = () => (
  <>
    <ListGroup>
      <ListGroupItem>
        <Link to="/input-data">Inspect Input Data</Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link to="/recharts">Recharts</Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link to="/bizcharts">BizCharts</Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link to="/victory">Victory</Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link to="/react-vis">React-Vis</Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link to="/nivo">Nivo</Link>
      </ListGroupItem>
    </ListGroup>
  </>
);

export default RootPage;
