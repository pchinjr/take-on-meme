// comment_api.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

type Comment = {
  id: string;
  name: string;
  comment: string;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class CommentAPI {
  private commentsFilePath = path.resolve(__dirname, "comments.json");

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
    const commentsData = fs.readFileSync(this.commentsFilePath, "utf-8");
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
    fs.writeFileSync(this.commentsFilePath, JSON.stringify(comments));
  }
}
