const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve static files (ต้องใช้ path.join(__dirname, '../frontend'))
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
}); 



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
