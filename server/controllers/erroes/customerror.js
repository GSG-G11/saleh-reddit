const myError = (error) => {
  const { msg, status } = error;
  const err = new Error(msg);
  err.status = status;
  return err;
};
module.exports = myError;