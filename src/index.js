const express = require('express');
const expressLayouts = require('express-ejs-layouts');
var path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'resources','views'));


// Express body parser
app.use(express.urlencoded({ extended: true }));

// route
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 4000;
app.listen(PORT,console.log(`${PORT}`));