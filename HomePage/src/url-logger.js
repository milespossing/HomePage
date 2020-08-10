exports = function(req,res,next) {
  let service = process.env.LOGSERVICE || 'localhost:5005'
  let body = {
    source: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    destination: req.protocol + '://' + req.get('host') + req.originalUrl,
  }
  const resp = fetch(service,{
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  next();
}