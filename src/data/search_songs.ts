export function searchSongs(query: string) {
  // Simulate a database of items
  const songs = [
    {
      title: "Take On Me",
      writers: ["Waaktaar", "Magne Furuholmen", "Morten Harket"],
      length: "3:48",
    },
    {
      title: "Train of Thought",
      writers: [],
      length: "4:14",
    },
    {
      title: "Hunting High and Low",
      writers: [],
      length: "3:45",
    },
    {
      title: "The Blue Sky",
      writers: [],
      length: "2:36",
    },
    {
      title: "Living a Boy's Adventure Tale",
      writers: ["Waaktaar", "Harket"],
      length: "5:00",
    },
    {
      title: "The Sun Always Shines on T.V.",
      writers: [],
      length: "5:08",
    },
    {
      title: "And You Tell Me",
      writers: [],
      length: "1:51",
    },
    {
      title: "Love Is Reason",
      writers: ["Waaktaar", "Furuholmen"],
      length: "3:04",
    },
    {
      title: "I Dream Myself Alive",
      writers: ["Waaktaar", "Furuholmen"],
      length: "3:06",
    },
    {
      title: "Here I Stand and Face the Rain",
      writers: [],
      length: "4:30",
    },
  ];

  // Filter items based on the query
  return songs.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );
}
