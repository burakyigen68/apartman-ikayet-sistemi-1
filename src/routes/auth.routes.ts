import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

// Auth routes setup
const router = Router();

// Route for user registration
router.post('/register', AuthController.register);

// Route for user login
router.post('/login', AuthController.login);

// Export the router to be used in the app
export default router;