const AppError = require('../errors/AppError');
const { logError } = require('./logger');

function errorHandler(err, _req, res) {
    const error = err instanceof AppError ? err : new AppError(err.message || 'Something went wrong');

    logError(error);

    res.status(error.statusCode).json(error.toJSON());
}

module.exports = { errorHandler };