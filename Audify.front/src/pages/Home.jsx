import React, { useEffect, useState } from "react";

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/songs")
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching songs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white">Loading songs...</p>;

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Audiffy - Song List</h1>
      <ul className="space-y-2">
        {songs.map((song) => (
          <li key={song.id} className="p-4 bg-gray-800 rounded-md">
            <p className="text-lg font-semibold">{song.title}</p>
            <p className="text-sm text-gray-400">Artist: {song.artist}</p>
            <audio controls className="mt-2 w-full">
              <source src={song.url} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}
