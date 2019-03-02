import React from "react";
import { Container, Tab } from "semantic-ui-react";
import LongToShort from "./LongToShort";
import ShortToLong from "./ShortToLong";

const panes = [
  {
    menuItem: "Long to short",
    render: () => (
      <Tab.Pane attached={false}>
        <LongToShort />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Short to long",
    render: () => (
      <Tab.Pane attached={false}>
        <ShortToLong />
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
