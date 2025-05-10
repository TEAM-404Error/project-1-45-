import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './components/SongList';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/songs');
        setSongs(response.data); // Assuming the response contains the song data
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };
    
    fetchSongs();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="App">
      <h1>Audiffy</h1>
      <SongList songs={songs} />
    </div>
  );
}

export default App;
