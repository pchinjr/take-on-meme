import { APIContext } from "astro";
import { CommentAPI } from "../../data/comment_api.ts";
const commentAPI = new CommentAPI();

export async function GET() {
  const comments = await commentAPI.fetchComments();
  console.log(comments);
  return new Response(JSON.stringify(comments), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST({ request }: APIContext) {
  const formData = await request.formData();
  const name = formData.get("name")?.toString() ?? "";
  const comment = formData.get("comment")?.toString() ?? "";
  await commentAPI.addComment(name, comment);
  console.log(request.headers.get("HX-Request"));
  const newCommentHtml = `<li style="padding: 1rem; border: 1px solid #ccc; margin-top: 1rem"> ${name}: ${comment}</li>`;
  return new Response(newCommentHtml, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}
