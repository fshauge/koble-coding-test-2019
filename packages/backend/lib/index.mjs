import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import ApiError from "./ApiError";
import errorHandler from "./errorHandler";
import * as storage from "./storage";
import UrlConverter from "./UrlConverter";

const urlConverter = new UrlConverter(storage);
const { PORT = 4000 } = process.env;
const app = express();
app.use(cors());
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
