module.exports = (err, request, response, next) => {
  response.status(err.status || 500);
  response.json({
    message: err.message
  })
}