const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serwowanie plików statycznych z katalogu "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Obsługa wszystkich tras
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Nasłuchiwanie na określonym porcie
app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});
