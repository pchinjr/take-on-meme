type Comment = {
  id: string;
  name: string;
  comment: string;
};

export class CommentAPI {
  private commentsFilePath = "/workspaces/take-on-meme/src/data/comments.json";

  async fetchComments(): Promise<Comment[]> {
    const commentsData = await Deno.readTextFile(this.commentsFilePath);
    return JSON.parse(commentsData);
  }

  async addComment(name: string, comment: string): Promise<void> {
    const comments = await this.fetchComments();
    const newComment: Comment = {
      id: crypto.randomUUID(),
      name: name,
      comment: comment,
    };
    comments.push(newComment);
    await Deno.writeTextFile(this.commentsFilePath, JSON.stringify(comments));
  }
}
