export interface Complaint {
    id: string; // Unique identifier for the complaint
    userId: string; // ID of the user who made the complaint
    description: string; // Description of the complaint
    status: 'pending' | 'in-progress' | 'resolved'; // Current status of the complaint
    createdAt: Date; // Date when the complaint was created
    updatedAt: Date; // Date when the complaint was last updated
}

export class ComplaintModel {
    constructor(
        public id: string,
        public userId: string,
        public description: string,
        public status: 'pending' | 'in-progress' | 'resolved',
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    // Method to update the status of the complaint
    updateStatus(newStatus: 'pending' | 'in-progress' | 'resolved') {
        this.status = newStatus;
        this.updatedAt = new Date(); // Update the timestamp
    }
}