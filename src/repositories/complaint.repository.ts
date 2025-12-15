class ComplaintRepository {
    private complaints: any[] = []; // Array to store complaints temporarily

    // Method to create a new complaint
    public createComplaint(complaint: any): void {
        this.complaints.push(complaint);
    }

    // Method to retrieve all complaints
    public getAllComplaints(): any[] {
        return this.complaints;
    }

    // Method to retrieve a complaint by ID
    public getComplaintById(id: number): any | undefined {
        return this.complaints.find(complaint => complaint.id === id);
    }

    // Method to update a complaint by ID
    public updateComplaint(id: number, updatedComplaint: any): boolean {
        const index = this.complaints.findIndex(complaint => complaint.id === id);
        if (index !== -1) {
            this.complaints[index] = { ...this.complaints[index], ...updatedComplaint };
            return true;
        }
        return false;
    }

    // Method to delete a complaint by ID
    public deleteComplaint(id: number): boolean {
        const index = this.complaints.findIndex(complaint => complaint.id === id);
        if (index !== -1) {
            this.complaints.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default ComplaintRepository;