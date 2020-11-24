import React, { Component } from "react";
import { Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class App extends Component {
  get breadcrumbs() {
    if (this.props.title === "Home") {
      return null;
    }
    return (
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Libraries List</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{this.props.title}</BreadcrumbItem>
      </Breadcrumb>
    );
  }
  render() {
    return (
      <Container fluid>
        <div>{this.breadcrumbs}</div>
        {this.props.children}
        {/* <a href="https://github.com/statsbotco/cube.js">
          <img
            style={{
              position: "fixed",
              marginLeft: -70,
              left: "50%",
              bottom: 10
            }}
            width="150px"
            src="https://statsbotco.github.io/cubejs-client/aws-web-analytics/powered-by-cubejs-color.svg"
          />
        </a> */}
      </Container>
    );
  }
}

export default App;
