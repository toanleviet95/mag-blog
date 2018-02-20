const express = require('express');
const app = express();
const PORT_NUMBER = 4200;
app.set('view engine', 'ejs');
app.set('views', './layouts');
app.use(express.static('public'));
app.listen(PORT_NUMBER, () => console.log(`Server started on port ${PORT_NUMBER}`));
app.get('/', (req, res) => res.render('index'));
app.get('/admin/:param([a-z-_]+)?', (req, res) => res.render('admin'));