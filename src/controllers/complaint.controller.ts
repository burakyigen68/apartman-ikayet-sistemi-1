export class ComplaintController {
    // Method to create a new complaint
    public async createComplaint(req, res) {
        try {
            const complaintData = req.body;
            // Call the service to handle the complaint creation logic
            const complaint = await complaintService.createComplaint(complaintData);
            res.status(201).json({ message: 'Complaint created successfully', complaint });
        } catch (error) {
            res.status(500).json({ message: 'Error creating complaint', error });
        }
    }

    // Method to view all complaints
    public async viewComplaints(req, res) {
        try {
            const complaints = await complaintService.getAllComplaints();
            res.status(200).json(complaints);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving complaints', error });
        }
    }

    // Method to update a complaint status
    public async updateComplaint(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const updatedComplaint = await complaintService.updateComplaint(id, updateData);
            res.status(200).json({ message: 'Complaint updated successfully', updatedComplaint });
        } catch (error) {
            res.status(500).json({ message: 'Error updating complaint', error });
        }
    }

    // Method to get complaint status
    public async getComplaintStatus(req, res) {
        try {
            const { id } = req.params;
            const status = await complaintService.getComplaintStatus(id);
            res.status(200).json({ message: 'Complaint status retrieved successfully', status });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving complaint status', error });
        }
    }
}

// Note: complaintService should be imported from the complaint.service.ts file.