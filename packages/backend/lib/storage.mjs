import randomize from "randomatic";

const storage = {};
const generateUrl = key => `https://www.koble.jobs/${key}`;

export const longToShort = longUrl => {
  const key = randomize("Aa0", 6);
  const shortUrl = generateUrl(key);
  storage[shortUrl] = longUrl;
  return shortUrl;
};

export const shortToLong = shortUrl => {
  return storage[shortUrl];
};
