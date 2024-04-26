// comment_api.ts
type Comment = {
    id: string;
    name: string;
    comment: string;
    createdAt: Date;
};

export class CommentAPI {
    private comments: Comment[] = [
        { id: "1", name: "Maggie", comment: "Such a great song!", createdAt: new Date('2023-01-01') },
        { id: "2", name: "Jonas", comment: "I've always loved this track.", createdAt: new Date('2023-01-02') },
        { id: "3", name: "Claire", comment: "This brings back memories.", createdAt: new Date('2023-01-03') },
    ];

    async fetchComments(): Promise<Comment[]> {
        return this.comments; // Return the hardcoded data
    }

    async addComment(name: string, comment: string): Promise<void> {
        const newComment: Comment = {
            id: crypto.randomUUID(), // Ensure each new comment gets a unique ID
            name: name,
            comment: comment,
            createdAt: new Date() // Use the current date and time
        };
        this.comments.push(newComment); // Add to the array
    }
}
