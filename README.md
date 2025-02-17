# ad-error-handler-sdk

The Error Handler SDK is designed to simplify error handling for developers by eliminating the need to create custom error classes. Instead, developers can simply pass an error message to the SDK, which will automatically detect the error and respond accordingly.

## Features

- Automatic Error Detection:

- Detect the type of error (e.g., ValidationError, DatabaseError) based on the input.

- Automatically assign appropriate HTTP status codes.

- Customizable Error Mapping:

- Allow users to define custom error types and mappings.

- Built-in Logging:

- Automatically log errors with timestamps and details.

-  Express.js Middleware:

-  Provide middleware for seamless integration with Express.js.

## Install

``` 
npm install ad-error-handler-sdk
or 
yarn add ad-error-handler-sdk

```
## Usage


```
const { errorHandler } = require('ad-error-handler-sdk');
const express = require('express');
const app = express();

// Example route
app.get('/validate', (req, res, next) => {
    const { value } = req.query;

    if (!value) {
        throw new Error('Validation failed: Value is required');
    }

    res.json({ message: 'Validation passed!' });
});

// Use the error handler middleware
app.use(errorHandler);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

```

## License

[MIT](LICENSE)
