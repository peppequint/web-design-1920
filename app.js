require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/src')));

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.listen(port, () => console.log(`Web Design running on port ${port}`));
