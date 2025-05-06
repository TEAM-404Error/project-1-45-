const express = require('express');
const cors = require('cors');
const songsRoutes = require('./routes/songs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/songs', songsRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
