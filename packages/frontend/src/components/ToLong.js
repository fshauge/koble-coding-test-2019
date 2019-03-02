import React, { useState, useCallback } from "react";
import { Form } from "semantic-ui-react";
import api from "../api";
import usePromise from "../hooks/usePromise";

const Result = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    data: { longUrl }
  } = data;

  return (
    <Form.Field>
      <label>Long URL</label>
      <a href={longUrl}>{longUrl}</a>
    </Form.Field>
  );
};

export default () => {
  const [url, setUrl] = useState();

  const { invoke, pending, error, data } = usePromise(
    useCallback(() => api.get("/url", { params: { shortUrl: url } }), [url])
  );

  const handleChange = event => {
    setUrl(event.target.value);
  };

  return (
    <Form>
      <Form.Input
        onChange={handleChange}
        error={Boolean(error)}
        label="Short URL"
      />
      <Form.Button fluid onClick={invoke} loading={pending}>
        Convert
      </Form.Button>
      <Result data={data} />
    </Form>
  );
};
