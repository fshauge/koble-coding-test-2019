import React from "react";
import * as api from "../api";
import Converter from "./Converter";

export default () => (
  <Converter
    fromLabel="Short URL"
    toLabel="Long URL"
    convert={url => api.shortToLong(url)}
  />
);
