const express = require('express');
const router = express.Router();

const songs = [
  { id: 1, title: 'Song One', artist: 'Artist One', url: '/songs/song1.mp3' },
  { id: 2, title: 'Song Two', artist: 'Artist Two', url: '/songs/song2.mp3' },
  { id: 3, title: 'Song Three', artist: 'Artist Three', url: '/songs/song3.mp3' }
];

router.get('/', (req, res) => {
  res.json(songs);
});

module.exports = router;
