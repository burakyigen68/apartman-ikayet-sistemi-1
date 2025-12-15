export interface User {
    id: number; // Unique identifier for the user
    username: string; // Username of the user
    password: string; // Password for user authentication
    email: string; // Email address of the user
    createdAt: Date; // Timestamp of when the user was created
    updatedAt: Date; // Timestamp of the last update to the user information
}

export class UserModel {
    private users: User[] = []; // Array to store user data

    // Method to create a new user
    public createUser(user: User): User {
        this.users.push(user);
        return user;
    }

    // Method to find a user by ID
    public findUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    // Method to update user information
    public updateUser(id: number, updatedUser: Partial<User>): User | undefined {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
            return this.users[userIndex];
        }
        return undefined;
    }

    // Method to delete a user
    public deleteUser(id: number): boolean {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }

    // Method to get all users
    public getAllUsers(): User[] {
        return this.users;
    }
}