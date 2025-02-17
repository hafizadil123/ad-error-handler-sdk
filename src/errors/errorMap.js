const errorMap = {
    ValidationError: {
        statusCode: 400,
        errorType: 'ValidationError',
        keywords: ['validation', 'invalid', 'required', 'missing'], 
    },
    NotFoundError: {
        statusCode: 404,
        errorType: 'NotFoundError',
        keywords: ['not found', 'missing', 'not exist'], 
    },
    UnauthorizedError: {
        statusCode: 401,
        errorType: 'UnauthorizedError',
        keywords: ['unauthorized', 'forbidden', 'access denied'], 
    },
    DatabaseError: {
        statusCode: 503,
        errorType: 'DatabaseError',
        keywords: ['database', 'connection failed', 'query failed'], 
    },
    InternalServerError: {
        statusCode: 500,
        errorType: 'InternalServerError',
        keywords: [], 
    },
};

module.exports = errorMap;