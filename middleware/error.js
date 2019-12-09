const errorHandler = (err, req, res, next) => {
  // Log to console
  console.log(err);

  res.status(500).json({
    success: false,
    error: err.message
  })
}

module.exports = errorHandler