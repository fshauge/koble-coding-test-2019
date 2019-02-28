import randomize from "randomatic";

export default class UrlConverter {
  constructor(storage) {
    this.storage = storage;
  }

  toShort(long) {
    const key = randomize("Aa0", 6);
    const short = `https://www.koble.jobs/${key}`;
    this.storage.set(short, long);
    return short;
  }

  toLong(short) {
    return this.storage.get(short);
  }
}
