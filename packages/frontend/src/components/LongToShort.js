import React from "react";
import * as api from "../api";
import Converter from "./Converter";

export default () => (
  <Converter
    fromLabel="Long URL"
    toLabel="Short URL"
    convert={url => api.longToShort(url)}
  />
);
