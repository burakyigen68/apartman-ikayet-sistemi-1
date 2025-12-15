import request from 'supertest';
import app from '../../src/app'; // Import the main application

describe('Complaints Integration Tests', () => {
    let complaintId;

    // Test case for creating a complaint
    it('should create a new complaint', async () => {
        const response = await request(app)
            .post('/api/complaints')
            .send({
                userId: 1,
                description: 'Leaking faucet in the kitchen',
                status: 'pending'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        complaintId = response.body.id; // Store the complaint ID for later tests
    });

    // Test case for retrieving a complaint
    it('should retrieve the created complaint', async () => {
        const response = await request(app)
            .get(`/api/complaints/${complaintId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', complaintId);
        expect(response.body).toHaveProperty('description', 'Leaking faucet in the kitchen');
    });

    // Test case for updating a complaint
    it('should update the complaint status', async () => {
        const response = await request(app)
            .put(`/api/complaints/${complaintId}`)
            .send({
                status: 'resolved'
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status', 'resolved');
    });

    // Test case for deleting a complaint
    it('should delete the complaint', async () => {
        const response = await request(app)
            .delete(`/api/complaints/${complaintId}`);

        expect(response.status).toBe(204); // No content status for successful deletion
    });
});