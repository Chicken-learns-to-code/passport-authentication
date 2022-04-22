// ------------------- Kết nối với thư viện ----------------- //
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

// ------------------- Kết nối với file trong câu trúc ----------------- //
const route = require('./routes/view');
const mongodb = require('./config/mongoose');

// ------------------- Kết nối dữ liệu ----------------- //
// Passport Config
require('./config/passport')(passport);
//Connect mongodb:
mongodb.connect();
const app = express();


// ------------------- Xử lý cấu trúc file ----------------- //
app.use(morgan('combined'));
// Insert link css, js
app.use(express.static(path.join(__dirname, 'public')));
// Template EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout/layout');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Express body parser
app.use(express.urlencoded({ extended: true }));
// ------------------- Cấu hình xác thực passport ----------------- //
// Express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Connect flash
app.use(flash());
// Global variables
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
// route init
route(app);


const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`${PORT}`));