const errorMap = require('./errorMap');

class AppError extends Error {
    constructor(message) {
        super(message);
        const errorType = this.detectErrorType(message);

        const { statusCode, errorType: mappedErrorType } = errorMap[errorType] || errorMap.InternalServerError;

        this.name = mappedErrorType;
        this.statusCode = statusCode;
        this.errorType = mappedErrorType;
        this.details = {};
        this.timestamp = new Date().toISOString();
        Error.captureStackTrace(this, this.constructor);
    }

    /**
     * Detects the error type based on the error message.
     * @param {string} message - The error message.
     * @returns {string} - The detected error type.
     */
    detectErrorType(message) {
        const lowerCaseMessage = message.toLowerCase();

        for (const [errorType, config] of Object.entries(errorMap)) {
            if (config.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
                return errorType;
            }
        }

        return 'InternalServerError';
    }

    toJSON() {
        return {
            error: this.name,
            message: this.message,
            statusCode: this.statusCode,
            errorType: this.errorType,
            details: this.details,
            timestamp: this.timestamp,
        };
    }
}

module.exports = AppError;