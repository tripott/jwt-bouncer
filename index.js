module.exports = (validationResultsProp, validator, options) => (
  req,
  res,
  next
) => {
  const validationResults = validator({ req, ...options });

  if (validationResults.ok) {
    req[validationResultsProp] = validationResults;
    next();
  } else {
    next(validationResults.err);
  }
};
