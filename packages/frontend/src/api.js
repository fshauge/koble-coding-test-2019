import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000"
});

export const longToShort = longUrl =>
  api.post("/url", { longUrl }).then(response => response.data.shortUrl);

export const shortToLong = shortUrl =>
  api
    .get("/url", { params: { shortUrl } })
    .then(response => response.data.longUrl);
