export const authenticateUser = (req, res, next) => {
    // Check if the user is authenticated
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access. No token provided.' });
    }

    // Verify the token (this is a placeholder, implement your token verification logic)
    try {
        const user = verifyToken(token); // Assume verifyToken is a function that verifies the token
        req.user = user; // Attach user information to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

// Placeholder function for token verification
const verifyToken = (token) => {
    // Implement your token verification logic here
    // For example, decode the token and return user information
    return { id: 1, username: 'exampleUser' }; // Example user data
};