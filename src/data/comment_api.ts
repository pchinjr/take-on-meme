// comment_api.ts
type Comment = {
  id: string;
  name: string;
  comment: string;
};

export class CommentAPI {
  private comments: Comment[] = [
    {
      id: "1",
      name: "Maggie",
      comment: "Such a great song!",
    },
    {
      id: "2",
      name: "Jonas",
      comment: "I've always loved this track.",
    },
    {
      id: "3",
      name: "Claire",
      comment: "This brings back memories.",
    },
  ];

  async fetchComments(): Promise<Comment[]> {
    return this.comments; // Return the hardcoded data
  }

  async addComment(name: string, comment: string): Promise<void> {
    const newComment: Comment = {
      id: crypto.randomUUID(), // Ensure each new comment gets a unique ID
      name: name,
      comment: comment,
      createdAt: new Date(), // Use the current date and time
    };
    this.comments.push(newComment); // Add to the array
  }
}
