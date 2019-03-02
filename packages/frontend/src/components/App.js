import React from "react";
import { Container, Tab } from "semantic-ui-react";
import ToShort from "./ToShort";
import ToLong from "./ToLong";

const panes = [
  {
    menuItem: "Long to short",
    render: () => (
      <Tab.Pane attached={false}>
        <ToShort />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Short to long",
    render: () => (
      <Tab.Pane attached={false}>
        <ToLong />
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
