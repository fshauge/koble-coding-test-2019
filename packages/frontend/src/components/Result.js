import React from "react";
import { Form } from "semantic-ui-react";

export default ({ label, url }) => {
  if (!url) {
    return null;
  }

  return (
    <Form.Field>
      <label>{label}</label>
      <a href={url}>{url}</a>
    </Form.Field>
  );
};
