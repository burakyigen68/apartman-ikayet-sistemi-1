export class NotificationService {
    // Method to send notification to the user about the complaint status
    sendNotification(userId: string, message: string): void {
        // Logic to send notification (e.g., email, SMS, etc.)
        console.log(`Notification sent to user ${userId}: ${message}`);
    }

    // Method to update user about the complaint status
    updateComplaintStatus(userId: string, complaintId: string, status: string): void {
        const message = `Your complaint with ID ${complaintId} has been updated to: ${status}`;
        this.sendNotification(userId, message);
    }
}