import React, { useState, useCallback } from "react";
import { Form } from "semantic-ui-react";
import * as api from "../api";
import usePromise from "../hooks/usePromise";

const Result = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    data: { shortUrl }
  } = data;

  return (
    <Form.Field>
      <label>Short URL</label>
      <a href={shortUrl}>{shortUrl}</a>
    </Form.Field>
  );
};

export default () => {
  const [longUrl, setLongUrl] = useState();

  const { invoke, pending, error, data } = usePromise(
    useCallback(() => api.longToShort({ longUrl }), [longUrl])
  );

  const handleChange = event => {
    setLongUrl(event.target.value);
  };

  return (
    <Form>
      <Form.Input
        onChange={handleChange}
        error={Boolean(error)}
        label="Long URL"
      />
      <Form.Button fluid onClick={invoke} loading={pending}>
        Convert
      </Form.Button>
      <Result data={data} />
    </Form>
  );
};
