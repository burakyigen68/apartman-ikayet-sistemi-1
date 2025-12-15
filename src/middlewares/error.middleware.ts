export const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error(err.stack);

    // Set the response status code based on the error type
    const statusCode = err.statusCode || 500;

    // Send a JSON response with the error message
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Middleware to handle 404 errors
export const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Resource not found',
    });
};