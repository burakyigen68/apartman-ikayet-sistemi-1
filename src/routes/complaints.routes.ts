import { Router } from 'express';
import ComplaintController from '../controllers/complaint.controller';

// Router instance for complaint-related routes
const router = Router();

// Create a new complaint
router.post('/complaints', ComplaintController.createComplaint);

// Get all complaints
router.get('/complaints', ComplaintController.getAllComplaints);

// Get a specific complaint by ID
router.get('/complaints/:id', ComplaintController.getComplaintById);

// Update a complaint by ID
router.put('/complaints/:id', ComplaintController.updateComplaint);

// Delete a complaint by ID
router.delete('/complaints/:id', ComplaintController.deleteComplaint);

// Export the router to be used in the app
export default router;