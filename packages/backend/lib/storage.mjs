import randomize from "randomatic";

const storage = {};
const createShortUrl = key => `https://www.koble.jobs/${key}`;

export const longToShort = longUrl => {
  const key = randomize("Aa0", 6);
  const shortUrl = createShortUrl(key);
  storage[shortUrl] = longUrl;
  return shortUrl;
};

export const shortToLong = shortUrl => {
  return storage[shortUrl];
};
