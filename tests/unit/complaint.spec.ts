import { ComplaintService } from '../../src/services/complaint.service';
import { Complaint } from '../../src/models/complaint.model';

describe('ComplaintService', () => {
    let complaintService: ComplaintService;

    beforeEach(() => {
        complaintService = new ComplaintService();
    });

    it('should create a complaint', () => {
        const complaintData = { userId: 1, description: 'Test complaint' };
        const complaint = complaintService.createComplaint(complaintData);
        expect(complaint).toBeInstanceOf(Complaint);
        expect(complaint.description).toEqual(complaintData.description);
    });

    it('should retrieve a complaint by ID', () => {
        const complaintData = { userId: 1, description: 'Test complaint' };
        const complaint = complaintService.createComplaint(complaintData);
        const retrievedComplaint = complaintService.getComplaintById(complaint.id);
        expect(retrievedComplaint).toEqual(complaint);
    });

    it('should update a complaint', () => {
        const complaintData = { userId: 1, description: 'Test complaint' };
        const complaint = complaintService.createComplaint(complaintData);
        const updatedData = { description: 'Updated complaint' };
        const updatedComplaint = complaintService.updateComplaint(complaint.id, updatedData);
        expect(updatedComplaint.description).toEqual(updatedData.description);
    });

    it('should delete a complaint', () => {
        const complaintData = { userId: 1, description: 'Test complaint' };
        const complaint = complaintService.createComplaint(complaintData);
        complaintService.deleteComplaint(complaint.id);
        const deletedComplaint = complaintService.getComplaintById(complaint.id);
        expect(deletedComplaint).toBeUndefined();
    });
});