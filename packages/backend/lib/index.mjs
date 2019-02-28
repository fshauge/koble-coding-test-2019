import express from "express";
import bodyParser from "body-parser";

import UrlConverter from "./UrlConverter";
import * as storage from "./storage";
import errorHandler from "./errorHandler";
import ApiError from "./ApiError";

const urlConverter = new UrlConverter(storage);
const { PORT = 3000 } = process.env;
const app = express();
app.use(bodyParser.json());

app.post("/url", ({ body: { longUrl } }, res) => {
  if (!longUrl) {
    throw new ApiError(400, "Missing longUrl parameter.");
  }

  const shortUrl = urlConverter.toShort(longUrl);
  res.json({ shortUrl, longUrl });
});

app.get("/url", ({ query: { shortUrl } }, res) => {
  if (!shortUrl) {
    throw new ApiError(400, "Missing shortUrl parameter.");
  }

  const longUrl = urlConverter.toLong(shortUrl);

  if (!longUrl) {
    throw new ApiError(404, "No longUrl exists for the specified shortUrl.");
  }

  res.json({ shortUrl, longUrl });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
