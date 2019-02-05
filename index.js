module.exports = (validationResultsProp, validator, options) => async (
  req,
  res,
  next
) => {
  try {
    const validationResults = await validator({ req, ...options });
    if (validationResults.ok) {
      req[validationResultsProp] = validationResults;
      next();
    } else {
      next(validationResults.err);
    }
  } catch (err) {
    console.log("JWT Bouncer caught unexpected error");
    next(err);
  }
};
