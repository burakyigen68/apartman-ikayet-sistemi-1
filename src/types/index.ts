export interface Complaint {
    id: string;
    userId: string;
    description: string;
    status: 'pending' | 'in-progress' | 'resolved' | 'closed';
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string; // In a real application, consider storing a hashed password
    createdAt: Date;
    updatedAt: Date;
}

export interface ComplaintResponse {
    complaint: Complaint;
    message: string;
}

export interface UserResponse {
    user: User;
    message: string;
}

export interface Notification {
    userId: string;
    complaintId: string;
    message: string;
    createdAt: Date;
}