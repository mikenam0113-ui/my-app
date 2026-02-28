const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || '서버 오류가 발생했습니다.';

  console.error(`[ERROR] ${req.method} ${req.url} - ${statusCode}: ${message}`);

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;
