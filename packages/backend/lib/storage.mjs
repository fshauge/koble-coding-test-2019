import randomize from "randomatic";

export const storage = {};

export const longToShort = longUrl => {
  const key = randomize("Aa0", 6);
  const shortUrl = `https://www.koble.jobs/${key}`;
  storage[shortUrl] = longUrl;
  return shortUrl;
};

export const shortToLong = shortUrl => {
  return storage[shortUrl];
};
