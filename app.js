const express = require('express');	
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const staticPath = path.join(__dirname, './public');
const templatePath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');
// console.log(__dirname);

app.use (express.static(staticPath));
app.use (express.json());
app.use (express.urlencoded({extended: false}));

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);




app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});