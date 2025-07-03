const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/index', (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/home2', (req,res) => {
  res.sendFile(__dirname + '/home2.html');
});

app.get('/contact', (req,res) => {
  res.sendFile(__dirname + '/contact.html');
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
