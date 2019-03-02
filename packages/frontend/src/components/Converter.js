import React, { useState, useCallback } from "react";
import { Form } from "semantic-ui-react";
import usePromise from "../hooks/usePromise";

const renderResult = (label, url) => (
  <Form.Field>
    <label>{label}</label>
    <a href={url}>{url}</a>
  </Form.Field>
);

export default ({ fromLabel, toLabel, convert }) => {
  const [url, setUrl] = useState();

  const { invoke, pending, error, data } = usePromise(
    useCallback(() => convert(url), [url])
  );

  const handleChange = event => {
    setUrl(event.target.value);
  };

  return (
    <Form>
      <Form.Input
        onChange={handleChange}
        error={Boolean(error)}
        label={fromLabel}
      />
      <Form.Button fluid onClick={invoke} loading={pending}>
        Convert
      </Form.Button>
      {data && renderResult(toLabel, data)}
    </Form>
  );
};
