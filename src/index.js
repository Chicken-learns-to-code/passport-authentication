const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const morgan = require('morgan');
const route = require('./routes/view');

const app = express();
app.use(morgan('combined'));
// Insert link css, js
app.use(express.static(path.join(__dirname,'public')));
// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout/layout');
app.set('views', path.join(__dirname,'resources','views'));

// Express body parser
app.use(express.urlencoded({ extended: true }));

// route init
route(app);


const PORT = process.env.PORT || 4000;
app.listen(PORT,console.log(`${PORT}`));