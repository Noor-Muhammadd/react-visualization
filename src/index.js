import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import SectionRoute from "./SectionRoute";

import RootPage from "./RootPage";
import InputDataPage from "./InputDataPage";

import RechartsPage from "./RechartsPage";
import BizchartsPage from "./BizchartsPage";
import VictoryPage from "./VictoryPage";
import ReactVisPage from "./ReactVisPage";
import NivoPage from "./NivoPage";

export const chartPages = [
  { path: "/recharts", title: "Recharts", component: RechartsPage },
  { path: "/bizcharts", title: "BizCharts", component: BizchartsPage },
  { path: "/react-vis", title: "React-Vis", component: ReactVisPage },
  { path: "/nivo", title: "Nivo", component: NivoPage },
  { path: "/victory", title: "Victory", component: VictoryPage }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <SectionRoute exact path="/" title="Home" component={RootPage} />
      <SectionRoute
        path="/input-data"
        title="Input Data"
        component={InputDataPage}
      />
      {chartPages.map((el, i) => (
        <SectionRoute
          path={el.path}
          title={el.title}
          component={el.component}
        />
      ))}
    </Switch>
  </BrowserRouter>,
  rootElement
);
