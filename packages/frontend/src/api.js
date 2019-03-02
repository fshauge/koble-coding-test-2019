import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000"
});

export const longToShort = params => api.post("/url", params);
export const shortToLong = params => api.get("/url", { params });
