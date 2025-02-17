const AppError = require('../errors/AppError');

function logError(error) {
    if (error instanceof AppError) {
        console.error(`[${error.timestamp}] ${error.name}:`, error.toJSON());
    } else {
        console.error(`[${new Date().toISOString()}] Unknown Error:`, error);
    }
}

module.exports = { logError };