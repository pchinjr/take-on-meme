import { APIContext } from "astro";
import { searchSongs } from "../../data/search_songs.ts";

type Song = {
  title: string;
  writers: string;
  length: string;
};

export async function POST({ request }: APIContext) {
  const formData = await request.formData();
  const title = formData.get("search")?.toString() ?? "";

  const searchResults = searchSongs(title);
  const searchHTML = searchResults
    .map(
      (song: Song) => `
        <tr>
          <td>${song.title}</td>
            <td>${song.writers}</td>
            <td>${song.length}</td>
        </tr>
    `,
    )
    .join("");

  return new Response(searchHTML, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}
