import { APIContext } from "astro";
import { searchSongs } from "../../data/search_songs.ts";

export async function POST({ request }: APIContext) {
  const formData = await request.formData();
  const title = formData.get("search")?.toString() ?? "";

  const searchResults = searchSongs(title);
  const searchHTML = searchResults
    .map(
      (song) => `
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
