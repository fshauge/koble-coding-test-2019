import React from "react";
import { Container, Tab } from "semantic-ui-react";
import * as api from "../api";
import Converter from "./Converter";

const panes = [
  {
    menuItem: "Long to short",
    render: () => (
      <Tab.Pane key="tab1" attached={false}>
        <Converter
          fromLabel="Long URL"
          toLabel="Short URL"
          convert={url => api.longToShort(url)}
        />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Short to long",
    render: () => (
      <Tab.Pane key="tab2" attached={false}>
        <Converter
          fromLabel="Short URL"
          toLabel="Long URL"
          convert={url => api.shortToLong(url)}
        />
      </Tab.Pane>
    )
  }
];

export default () => {
  return (
    <Container text>
      <Tab menu={{ pointing: true, secondary: true }} panes={panes} />
    </Container>
  );
};
