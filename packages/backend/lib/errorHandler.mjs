// https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
// eslint-disable-next-line no-unused-vars
export default ({ status = 500, message }, req, res, next) => {
  res.status(status).json({ error: message });
};
